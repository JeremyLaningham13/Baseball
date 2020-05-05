import React, { Component } from 'react';
import "./Hours.scss";

class Hours extends Component {
    render() {
        return (
            <div className='hours-container'>
                <h1 className='hours-text'>Hours of Operation</h1>
                <h3 className='hours-text'>Monday - Friday: 4 pm - 9 pm</h3>
                <h3 className='hours-text'>Saturday: 9 am - 5 pm</h3>
                <h3 className='hours-text'>Sunday: 1 pm - 5 pm</h3>
            </div>
        )
    }
}

export default Hours