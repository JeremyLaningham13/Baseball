import React, { Component } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import axios from "axios";
// import Stripe_payment from '../Stripe/Stripe_payment';
import StripeCheckout from "react-stripe-checkout";
import stripe from "../../stripe";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  onToken = async (token) => {
    token.card = void 0;

    await axios
      .post("/api/payment", { token, amount: 100 })
      .then(() => {
        alert("Payment Submitted");
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getCart();
  }

  getCart = () => {
    axios
      .get(`/api/cart/${this.props.user.cart_id}`)
      .then((res) => this.setState({ cart: res.data }))
      .catch((err) => console.log(err));
  };

  deleteCartItem = (id) => {
    axios
      .delete(`/api/cart-item/${id}`)
      .then(() => this.getCart())
      .catch((err) => console.log(err));
  };

  render() {
    const mappedCart = this.state.cart.map((item, i) => {
    return (
      <div key={i}>
          {/* <p>{item.name}</p> */}
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button className="remove-button" onClick={() => this.deleteCartItem(item.cart_item_id)}>Remove Item</button>{" "}
          <br />
          <StripeCheckout
            label="Checkout"
            token={this.onToken}
            stripeKey={stripe.publicKey}
            amount={item.price * 100}
          />
        </div>
      );
    });
    

    
    return (
      <div className='logout-container'>
        <h1 className='cart-logout' >Cart</h1>
        {mappedCart}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Cart);
