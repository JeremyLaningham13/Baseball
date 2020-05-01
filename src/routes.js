import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Account from './Components/Account/Account';
import Cart from './Components/Cart/Cart';
import Appointment from './Components/Appointment/Appointment';
import Hours from './Components/Hours/Hours';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Offer from './Components/WhatWeOffer/WhatWeOffer';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/offer' component={Offer} />
        <Route path='/account' component={Account} />
        <Route path='/appointment' component={Appointment} />
        <Route path='/cart' component={Cart} />
        <Route path='/hours' component={Hours} />
        <Route path='/login' component={Account, Login} />
        <Route path='/logout' component={Logout} />
    </Switch>
)