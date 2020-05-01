import React, { Component } from 'react';
// import './Login.css';
import axios from 'axios';
import {connect} from 'react-redux';

import {getUser} from '../../redux/reducer';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            verPassword: '',
            registerView: false
        }
    }

    componentDidMount(){
        if(this.props.user.email){
            this.props.history.push('/account');
        }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView})
    }

    handleRegister = () => {
        const {firstname, lastname, email, password, verPassword} = this.state;
        if(password !== '' && password === verPassword){
            axios.post('/auth/register', {firstname, lastname, email, password})
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
        } else {
            alert("Passwords don't match");
        }
    }

    handleLogin = () => {
        const {email, firstname, password} = this.state;
        axios.post('/auth/login', {email, firstname, password})
        .then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/account');
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='login-container'>
                <section className='authentication-info'>
                    {/* <h1>On Deck Baseball</h1> */}
                    {this.state.registerView
                    ? (<>
                       <h3>Create account</h3>
                       <input
                            value={this.state.firstname}
                            name='firstname'
                            placeholder='First Name'
                            onChange={(e) => this.handleInput(e)}/>
                        <input
                            value={this.state.lastname}
                            name='lastname'
                            placeholder='Last Name'
                            onChange={(e) => this.handleInput(e)}/>
                        </>)
                    : <h3></h3>}
                    <input
                        value={this.state.email}
                        name='email'
                        placeholder='Email'
                        onChange={(e) => this.handleInput(e)}/>
                    <input
                        type='password'
                        value={this.state.password}
                        name='password'
                        placeholder='Password'
                        onChange={(e) => this.handleInput(e)}/>  
                    {this.state.registerView
                    ? ( <>
                    <input
                            type='password'
                            value={this.state.verPassword}
                            name='verPassword'
                            placeholder='Verify Password'
                            onChange={(e) => this.handleInput(e)}/>
                        <button onClick={this.handleRegister}>Register</button>
                        <p>Have an account? <span onClick={this.handleToggle}>Login Here</span></p> 
                        </>)
                    : (<>
                        <button className='login-button' onClick={()=>this.handleLogin()}>Login</button>
                        <p>Don't have an account? <span className='create-account' onClick={this.handleToggle}>Create One</span></p>
                        </>)}      
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Login);