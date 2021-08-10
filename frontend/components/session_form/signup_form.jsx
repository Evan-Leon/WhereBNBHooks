import React from 'react';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        email: '',
        first_name: '',
        last_name: '',
        birthdate: '',
        password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
        this.setState({ [type]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(this.props.closeModal)
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

  render() {  
    return(
      <div className="signup-form">
          <h2 className="signup-title">Sign up!</h2>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          
          <form className="signup-form-box"  >
            <div className='signup-inputs'>
              {/* <label htmlFor="">Email: */}
                  <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')} />
              {/* </label> */}
              {/* <label htmlFor="">First Name: */}
                  <input placeholder="First Name" type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
              {/* </label> */}
              {/* <label htmlFor="">Last Name: */}
                  <input type="text" placeholder="Last Name" value={this.state.last_name} onChange={this.handleInput('last_name')} />
              {/* </label> */}
              {/* <label htmlFor="">Birthdate */}
                  <input className="birthdate" placeholder="Birthdate" type="date" value={this.state.birthdate} onChange={this.handleInput('birthdate')} />
              {/* </label> */}
              {/* <label htmlFor="">Password: */}
                  <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')} />
              {/* </label> */}
              {this.renderErrors()}
              <button className="signup-submit" type="submit" onClick={this.handleSubmit} > Signup </button>
              </div>
          </form>  
      </div>
    )
  }
}

export default SignupForm;