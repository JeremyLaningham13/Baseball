const {SECRET_KEY} = process.env,
        Stripe = require('stripe')(SECRET_KEY);

module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.products.get_products()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
    },
    addToCart: (req, res) => {
        //This will add a product to a users cart
        const {cart_id, product_id, price} = req.body,
              db = req.app.get('db');

        db.cart.add_to_cart(cart_id, product_id, price)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    getCart: (req, res) => {
        //This will get the users cart when they visit the cart page
        const {id} = req.params,
              db = req.app.get('db');

        db.cart.get_cart(id)
        .then(items => res.status(200).send(items))
        .catch(err => res.status(500).send(err))
    },
    deleteCartItem: (req, res) => {
        //This will delete an item from the users cart
        const {id} = req.params,
              db = req.app.get('db');

        db.cart.delete_cart_item(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    completePurchase: async(req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        //Stripe stuff happens here (processing payments)
        const {token, amount} = req.body;

        const charge = Stripe.charges.create({
            amount,
            currency: 'usd',
            source: token.id,
            description: 'Test Charge'
        }, function(err, charge){
            if(err){
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })

        db.cart.complete_purchase(id);

        let userCart = await db.cart.create_cart(id);
        let sessionUser = {...req.session.user, cart_id: userCart[0].cart_id}
        req.session.user = sessionUser;
        res.status(200).send(req.session.user);
    }
}