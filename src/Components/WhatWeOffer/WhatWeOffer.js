import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "./WhatWeOffer.scss";

class WhatWeOffer extends Component {
    render() {
        return (
            <div className='offer-container'>
                <h2 className='offer-text'>PRIVATE LESSONS/GROUP LESSONS</h2>
                <h3 className='offer-text'>Baseball & Softball - All Ages</h3>
                <p className='offer-text'> FOR DETAILS SEE OUR <Link className='lesson-link' to='/lessons'>LESSONS PAGE</Link></p>
                <h2 className='offer-text'>CAGE RENTAL</h2>
                <p className='offer-text'>RESERVE YOUR CAGE IN ADVANCE IN 1/2 HOUR AND HOUR INCREMENTS (48 HOUR CANCELLATION POLICY) WALK - INS WELCOME.</p>
                <h2 className='offer-text'>TOKEN OPERATED MACHINES</h2>
                <p className='offer-text'>IRON MIKE BASEBALL MACHINE AND JUGS RANGE PRO SOFTBALL MACHINE</p>
                <h2 className='offer-text'>GLOVE REPAIR</h2>
                <p className='offer-text'>FIX THE OLD GLOVE AND GIVE IT NEW LIFE</p>
            </div>
        )
    }
}

export default WhatWeOffer