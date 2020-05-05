import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "./WhatWeOffer.scss";

class WhatWeOffer extends Component {
    render() {
        return (
            <div className='offer-container'>
                <h2>PRIVATE LESSONS/GROUP LESSONS</h2>
                <h3>Baseball & Softball - All Ages</h3>
                <p>FOR DETAILS SEE OUR <Link className='lesson-link' to='/lessons'>LESSONS PAGE</Link></p><br></br>
                <h2>CAGE RENTAL</h2>
                <p>RESERVE YOUR CAGE IN ADVANCE IN 1/2 HOUR AND HOUR INCREMENTS (48 HOUR CANCELLATION POLICY) WALK - INS WELCOME.</p><br></br>
                <h2>TOKEN OPERATED MACHINES</h2>
                <p>IRON MIKE BASEBALL MACHINE AND JUGS RANGE PRO SOFTBALL MACHINE</p><br></br>
                <h2>GLOVE REPAIR</h2>
                <p>FIX THE OLD GLOVE AND GIVE IT NEW LIFE</p><br></br>
            </div>
        )
    }
}

export default WhatWeOffer