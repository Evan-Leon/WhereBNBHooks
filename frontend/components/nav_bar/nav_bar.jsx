import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search'
import Dropdown from './dropdown'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false,
        }
    }

    // componentDidMount(){
    //     if (!this.props.currentUser){
    //     this.setState({currentUser: [this.props.currentUser]})}
    // }

    // componentDidUpdate(prevProps){
    //     
    //     if (this.props !== prevProps){
    //         this.setState({currentUser: [this.props.currentUser]})
    //     }
    // }



    navSessionLinks = () =>(
        <div className="login-signup-dropdown">
                <ul className="logout-buttons">
                    <li onClick={() => this.props.openModal('login')}>Login</li>
                    <li onClick={() => this.props.openModal('signup')}>Signup</li>
                    <li onClick={() => this.props.login(this.props.demoUser)}>Demo User</li>
                </ul>
        </div>
    )
    
   navGreeting = () => (
//        <div className="greeting-nav">
//            <h2 className="greeting-first-name">Greetings, {currentUser.firstName}</h2>
           <div className="nav-logout-button" onClick={this.props.logout}>Log Out</div>
//        </div>
   )

    render(){
        
        if (this.props.currentUser){
            
            let userId = this.props.currentUser;
            return(
                <div className="login-signup-dropdown">
                    <ul className="logout-buttons">
                        <li className="nav-logout-button" onClick={this.props.logout}>Log Out</li>
                        <Link className="drop-links" to={{pathname: `/reviews/${userId}`}} style={{textDecoration: 'none', color:"black"}} ><li className="nav-logout-button" >My Reviews</li> </Link>
                        <Link className="drop-links" to={{ pathname: `/bookings/${userId}` }} style={{ textDecoration: 'none', color: "black" }} ><li className="nav-logout-button" >My Bookings</li> </Link>
                        
                    </ul>
                    
                 
                </div>
            )
        } else {
            return(
                <div className="login-signup-dropdown">
                <ul className="login-buttons">
                    <li onClick={() => this.props.openModal('login')}>Login</li>
                    <li onClick={() => this.props.openModal('signup')}>Signup</li>
                    <li onClick={() => this.props.login(this.props.demoUser)}>Demo User</li>
                </ul>
                </div>
            )
        }
    }
}

export default NavBar;