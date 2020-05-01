const bcrypt = require ('bcryptjs');

module.exports ={
    register: async(req, res) => {
        const {firstname, lastname, email, password} = req.body,
            db = req.app.get('db');
        // console.log(req.body)

        const foundUser = await db.customer.check_customer(email);
        if(foundUser[0]){
            return res.status(400).send('Email already in use')
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        const newUser = await db.customer.register_customer(firstname, lastname, email, hash);

        let customerCart = await db.cart.create_cart(newUser[0].customer_id);
        let sessionCustomer = {...newUser[0], ...customerCart[0]};

        req.session.user = sessionCustomer;
        res.status(201).send(req.session.user);
    },

    login: async(req, res) => {
        const {email, password} = req.body,
            db = req.app.get('db');

        let foundUser = await db.customer.check_customer(email);
        // console.log(email, password)
        if(!foundUser[0]){
            // console.log('hit 1')
            return res.status(400).send('Email does not exist');
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            // console.log('hit 2')
            return res.status(401).send('Password is incorrect');
        }

        delete foundUser[0].password;
        req.session.user = foundUser[0];
        // console.log(req.session.user)
        res.status(202).send(req.session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

}