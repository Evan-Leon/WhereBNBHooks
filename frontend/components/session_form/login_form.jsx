import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
    
        this.props.processForm(user).then(this.props.closeModal);
    }
    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) =>(
                    <li className="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    demoUser(e) {
        this.setState({email: "DemoUser@wherebnb.com", password: '123456'})
    }

    render() {
        return(
            <div className="login-form-container">
                
                <form  className="login-form-box" onSubmit={this.handleSubmit} >
                  <div className="login-top">
                    <h2 className="login-title">Welcome Back!</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    </div>
                    <br />
                    
                    <div className="login-form">
                        
                        {/* <label htmlFor="">Email: */}
                            <input placeholder="Email" type="text" value={this.state.email} onChange={this.update('email')} className="email-input" />
                        {/* </label> */}
                        {/* <label htmlFor="">Password: */}
                            <input placeholder="Password" type="password" value={this.state.password} onChange={this.update('password')} className="pass-input" />
                        {/* </label> */}
                        {this.renderErrors()}
                        <button  className="login-submit" value="Login"  >Login </button>
                        <button className="demo-user-button" onClick={this.demoUser}>Demo User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);

