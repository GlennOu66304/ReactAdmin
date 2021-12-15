import React, { Component, } from 'react';
import './index.scss';
import LoginFom from './LoginForm'
import RegisterForm from './RegisterForm'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: "login"

        };
    }
    switchForm = (value) => {
        // console.log(value);
        this.setState({
            formType: value
        })
    }
    render() {
        return (
            <div className="form-wrap">
                <div>
                    {this.state.formType === "login" ? <LoginFom switchForm={this.switchForm} /> : <RegisterForm switchForm={this.switchForm} />}
                </div>
            </div>

        );


    }
}

export default Login;