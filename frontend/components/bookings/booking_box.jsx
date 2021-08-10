import React from 'react';
import listing_map from '../listings_map/listing_map';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';


class BookingBox extends React.Component {
    constructor(props){
        super(props);
    }

    
    render(){
        
        if (!this.props.listing) return null;
        
        return (
            <div className="booking-box">
                <p className="box-price">${this.props.listing.price}/night</p>
                <p><FontAwesomeIcon icon={faStar} className="star"/> 4.88 (27 reviews)</p>
                <div>{format(new Date(this.props.listing.checkIn.toString().slice(0,10)), "MMM d Y")}</div>
                <div>{format(new Date(this.props.listing.checkOut.toString().slice(0,10)), "MMM d Y")}</div>
                <div>{this.props.listing.checkOut}</div>
                <label htmlFor="num-guests">Choose Number of Guests</label>
                <select name="num-guests" id="num-guests">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guest</option>
                    <option value="3">3 Guest</option>
                    <option value="4">4 Guest</option>
                    <option value="5">5 Guest</option>
                    <option value="6">6 Guest</option>
                    <option value="7">7 Guest</option>
                    <option value="8">8 Guest</option>
                    <option value="9">9 Guest</option>
                    <option value="10">10 Guest</option>
                </select>
               
            </div>
        )
    }

}

export default BookingBox;