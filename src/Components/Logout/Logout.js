import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {clearUser} from '../../redux/reducer';
import { withRouter } from 'react-router-dom';

export class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            editView: false
        }
    }

    // componentDidMount(){
    //     if(!this.props.user.email){
    //         this.props.history.push('/account')
    //     }
    // }

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
            <div className='logout'>
            
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, {clearUser})(Logout));