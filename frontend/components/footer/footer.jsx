import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faIgloo  } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        <a href=""></a>
        return(
            <footer className="main-footer">
                <div className="footer-logo-container">
                    <Link className="logo-box" to="/" style={{ textDecoration: 'none', color: "black" }}> <FontAwesomeIcon className="logo-footer" icon={faIgloo} size='3x' />
                        <p className='logo-footer-title'>WhereBNB</p>
                    </Link>
                </div>
                
                
                <div className="link-container">
                    <a target="_blank" href="https://www.linkedin.com/in/evan-leon-737918211/"><i className="fab fa-linkedin"></i></a>
                    <a target="_blank" href="https://github.com/Evan-Leon"><i className="fab fa-github"  ></i></a>
                    <a target="_blank" href="https://angel.co/u/evan-leon"><i className="fab fa-angellist"  ></i></a>
                    <a target="_blank" href="https://evanleon.com"> <i id="port" className="fas fa-user"></i></a>
                    
                    
                </div>
                
            </footer>
        )
    }
}

export default Footer;