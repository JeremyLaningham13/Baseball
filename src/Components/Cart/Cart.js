import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Stripe_payment from '../Stripe/Stripe_payment';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        this.getCart()
    }

    getCart = () => {
        axios.get(`/api/cart/${this.props.user.cart_id}`)
        .then(res => this.setState({cart: res.data}))
        .catch(err => console.log(err));
    }

    deleteCartItem = (id) => {
        axios.delete(`/api/cart-item/${id}`)
        .then(() => this.getCart())
        .catch(err => console.log(err));
    }

    render(){
        const mappedCart = this.state.cart.map((item, i) => {
            return (
                <div key={i} className='product-container'>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <button onClick={() => this.deleteCartItem(item.cart_item_id)}>Remove Item</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Cart</h1>
                {mappedCart}
                <Stripe_payment />
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Cart);
