import React, { Component } from 'react';
import "./Hours.scss";

class Hours extends Component {
    render() {
        return (
            <div className='hours-container'><br></br>
                <h1 className='box'>Hours of Operation</h1>
                <h3>Monday - Friday: 4 pm - 9 pm</h3>
                <h3>Saturday: 9 am - 5 pm</h3>
                <h3>Sunday: 1 pm - 5 pm</h3>
            </div>
        )
    }
}

export default Hours