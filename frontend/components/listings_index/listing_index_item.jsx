import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';

class ListingIndexItem extends React.Component {
   

    render(){
        const {listing} = this.props;
    return(
        <li className="index-item-box">
            <div className="listing-picture">
                <img className="index-img" src={listing.coverphotoUrl} alt="house" />
            </div>
            <div className="index-info">
                {/* {listing.id}.jpg */}
                <h3 className="index-title">{listing.title}</h3>
                
                <p>{listing.guestNum} guests- {listing.numBeds} bedrooms</p>


                <div className="review-price">
                    <p><FontAwesomeIcon icon={faStar} className="star"/> 4.88 (27 reviews)</p>
                    <p>${listing.price}/night</p>
                </div>
            </div>
            <br />
        </li>
    )}
}

export default ListingIndexItem;