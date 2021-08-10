import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
    }



    render(){


        return(
            <div className="main-body">
                <div className="inspired-box">
                    <img src={window.hutsUrl} alt="huts" className="main-photo" />
                    <h2 className="happy-place">Find Your Happy Place</h2>
                    <Link to='/listings'><button className= "inspired">Get Inspired</button></Link>
                </div>
                <br />
                <h2 className="explore">Explore</h2>
                <ul className="explore-container">
                   <div className='city-explore'>
                        <Link to='/search/New York City'><img id="new-york" className="city-pic" src={window.cartoonLakeUrl} alt="lake" /></Link>
                        <li>New York</li>
                        
                    </div>
                    <div className="city-explore">
                    <Link className="city-link" to='/search/San Francisco'><img id="san-fran" className="city-pic" src={window.springsUrl} alt="springs" /></Link>
                        <li>San Francisco</li>
                    </div>
                    <div className="city-explore">
                    <Link to='/search/Boston'><img id="boston" className="city-pic" src={window.forestRiverUrl} alt="forest-river" /></Link>
                        <li>Boston</li>
                    </div>
                    <div className='city-explore'>
                    <Link to='/search/Chicago'><img id="chicago" className="city-pic" src={window.soundsUrl} alt="sound" /></Link>
                        <li>Chicago</li>
                    </div>
                    <div className="city-explore">
                    <Link to='/search/Miami'><img id="miami" className="city-pic" src={window.watersideUrl} alt="waterside" /></Link>
                        <li>Miami</li>
                    </div>
                    <div className="city-explore">
                    <Link to='/search/Seattle'> <img id="seattle" className="city-pic" src={window.riverUrl} alt="river" /></Link>
                        <li>Seattle</li>
                    </div>
                </ul>
                <br />
                <h2 className="live-anywhere">Live Anywhere</h2>
                <ul className="visit-container">
                    <div className="visit-box">
                    <Link to="/listings/8"><img className="live-anywhere-img" src={window.barnUrl} alt="barn" /></Link>
                        <li>Outdoor getaways</li>
                    </div>
                    <div className="visit-box">
                    <Link to="/listings/3"><img className="live-anywhere-img" src={window.waterHouseUrl} alt="water-house" /></Link>
                        <li>Unique stays</li>
                    </div>
                    <div className="visit-box">
                        <Link to="/listings/4"><img className="live-anywhere-img" src={window.triangleHouseUrl} alt="triangle-house" /></Link>
                        <li>Entire Homes</li>
                    </div>
                    <div className="visit-box">
                        <Link to="/listings"><img className="live-anywhere-img" src={window.pugUrl} alt="pug" /></Link>
                        <li>Pets Allowed</li>
                    </div>
                </ul>
                <br />
                
            </div>
        )
    }
}

export default Home;