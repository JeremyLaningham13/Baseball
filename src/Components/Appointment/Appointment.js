import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Appointment extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('/api/products')
        .then(res => this.setState({products: res.data}))
        .catch(err => console.log(err));
    }

    addToCart = (id, price) => {
        if(this.props.user.email){
            axios.post('/api/cart-item', {cart_id: this.props.user.cart_id, product_id: id, price})
            .then(() => {
                window.alert('Item added to cart');
            })
            .catch(err => console.log(err));
        } 
    }

    render() {
       const mappedProducts = this.state.products.map((product, i) => (
           <div key={i}>
               <p>{product.name}</p>
               <p>{product.description}</p>
               <p>${product.price}</p>
               <button onClick={() => this.addToCart(product.product_id, product.price)}>Add to Cart</button>
           </div>
       ))
        return (
            <div className='products'>
                <h1>Lessons & Cage Rentals</h1>
                {mappedProducts}
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Appointment);
