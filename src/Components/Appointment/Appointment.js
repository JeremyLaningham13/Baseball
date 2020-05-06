import React, { Component } from 'react';
import "./Appointment.scss";
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
               
               {/* <p>{product.name}</p> */}
               {/* <p>{product.description} - ${product.price} </p> */}
               {/* <p>${product.price}</p> */}
               <button className='cart-button' onClick={() => this.addToCart(product.product_id, product.price)}>{product.description} - ${product.price}</button>
           </div>
       ))
        return (
            <div className='products-container'>
                <h1 className='products-text'>Lessons & Cage Rentals</h1>
                <p className='products-text'>We have Baseball and Softball  machines. You can  rent an empty cage for Pitching, Team practice or Tee Work.<br/>  Come enjoy our team friendly environment and get all the benefits of an Indoor facility.</p>
                <a className='products-text'>{mappedProducts}</a>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Appointment);
