
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faIgloo } from '@fortawesome/free-solid-svg-icons';
import NavBarContainer from "./nav_bar_container";
import SearchContainer from './search_container';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className="nav-header">
                <div className="logo-container">
                    <Link className="logo-box" to="/" style={{ textDecoration: 'none', color: "black" }}> <FontAwesomeIcon className="logo" icon={faIgloo} size='3x' />
                    <p className='Title'>WhereBNB</p>
                    </Link>
                </div>
                < SearchContainer />
                <li className="users-dropdown-btn">
                    <FontAwesomeIcon className="bars" icon={faBars}  />
                    <FontAwesomeIcon className="user-icon" icon={faUserCircle}  />
                    
                    <NavBarContainer className="login-buttons-box" />
                </li>
            </div>
        )
    }
}

export default Header;