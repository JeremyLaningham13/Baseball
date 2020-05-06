import React, { Component } from 'react';
import './Account.scss';
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
            email: '',
            editView: false
        }
    }

    componentDidMount(){
        if(!this.props.user.email){
            this.props.history.push('/')
        }
    }

    handleInput = (val) => {
        this.setState({email: val})
    }

    handleEditView = () => {
        this.setState({editView: !this.state.editView})
    }

    handleLogout = () => {
        axios.get('auth/logout')
        .then(() => {
            this.props.clearUser();
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    updateUseremail = () => {
        const {email} = this.state;
        axios.put(`/api/customer/${this.props.user.customer_id}`, {email})
        .then(res => {
            this.props.getUser(res.data[0]);
            this.handleEditView();
            this.setState({email: ''});
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='account-container'>
                <span className='account-text'>

                <h1>My Account</h1>
                <button className='logout-button' onClick={this.handleLogout}>Logout</button>
                <h1>Account Details</h1>
                <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                {/* <h4>{this.props.user.email}</h4> */}
                {!this.state.editView
                ? <h2>{this.props.user.email} <button className='edit-button' onClick={this.handleEditView}>Edit</button></h2>
                : (<div>
                    <input 
                        value={this.state.email}
                        placeholder='New Email'
                        onChange={(e) => this.handleInput(e.target.value)}/>
                    <button className='submit-button' onClick={this.updateUseremail}>Submit</button>
                   </div>)}
                </span>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, {getUser, clearUser})(Account));