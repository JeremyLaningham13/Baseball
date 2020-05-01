import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {clearUser} from '../../redux/reducer';
import {getUser} from '../../redux/reducer'
import { withRouter } from 'react-router-dom';

class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            editView: false
        }
    }

    componentDidMount(){
        if(!this.props.user.email){
            this.props.history.push('/')
        }
    }

    handleLogout = () => {
        axios.get('auth/logout')
        .then(() => {
            this.props.clearUser();
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='account'>
                <h1>My Account</h1>
                <button onClick={this.handleLogout}>Logout</button>
                <h1>Account Details</h1>
                <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                <h4>{this.props.user.email}</h4>
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, {getUser, clearUser})(Account));