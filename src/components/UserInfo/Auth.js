import React from 'react';
//import reactDOM from 'react-dom';




export default class UserAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            isLoginOpen: true,
            isRegisterOpen: false,
        };
    }

    showLogin() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }

    showRegister() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    // fetch('http://localhost:4001/user/login'){
    //     .then(res => res.json())
    //     .then(res => {

    //     })
    // }
    
    


    render() {
        return (
            <div className="container">
                <div className="box-controller">
                    <div className="login-controller" onClick={this.showLogin.bind(this)}>
                        Login
                    </div>
                    <div className="register-controller" onClick={this.showRegister.bind(this)}>
                        Register
                    </div>
                </div>

                <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isLoginOpen && <RegisterBox />}
                </div>
            </div >
        );
    }
}

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submitLogin(e) {

    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login
            </div>
                <div className="box">
                    <div className="inport-group">
                        <label className="username">Username</label>
                        <input type="text" className="login-input" name="username" placeholder="Username" />
                    </div>

                    <div className="inport-group">
                        <label className="username">Username</label>
                        <input type="password" className="password-input" name="password" placeholder="Password" />
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>

                </div>
            </div>
        )

    }

}

class RegisterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submitRegister(e) {

    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Register
            </div>
                <div className="box">

                    <div className="inport-group">
                        <label className="username">Username</label>
                        <input type="text" className="login-input" name="username" placeholder="Username" />
                    </div>

                    <div className="inport-group">
                        <label className="username">Username</label>
                        <input type="password" className="password-input" name="password" placeholder="Password" />
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>

                </div>
            </div>
        )
    }

}

//reactDOM.render(<App />, document.getElementById)