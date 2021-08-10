import React, {useState} from 'react';
// import MyCalendar from './calendar';
import Calendar from 'react-calendar';
import MyDateRange from './date_range';
import {DateRange} from 'react-date-range'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles, faStar, 
    faMedal, faUserCircle, faClock, faPaw, faSprayCan, faRadiation,
    faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import ListingShowMap from '../listings_map/listing_show_map';
import BookingForm from '../bookings/booking_form';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewDisplayContainer from '../reviews/review_display_container';


class ListingShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkIn: new Date(),
            checkOut: new Date(),
            reviews: '',
            
        }
        
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId);
        
    }

   
  


    render(){
        
        const { listing } = this.props;
        
        if (!listing) return null;

        let reviewNum = listing.reviews.length;
        let counter = 0;
        let ratings = listing.reviews.forEach(review => counter += review.rating)
        let avgRating = [counter/reviewNum]
        let roundRating = Math.round(avgRating * 100)/100
       
        
      

        return(
            <div className= "listing-show-box">
                <div className="top-show">
                    <h3 className="listing-title">{listing.title}</h3>
                    <div className="review-city">
                        <p className="reviews"> <FontAwesomeIcon icon={faStar} className="star"/> {roundRating} ({reviewNum} reviews)</p>  
                        <p className="city" >{listing.city} </p>
                    </div>
                    <br />
                    <div className="photo-box">
                        <div className="title-photo">
                            <img className="cover-photo-show" src={listing.coverphotoUrl} alt="cover-photo" />
                        </div>
                        <div className="interior-images">
                            <img src={window.interior1} alt="interior-shot" className='int1'/>
                            <img src={window.interior2} alt="interior-shot" className='int2' />
                            <img src={window.interior3} alt="interior-shot" className='int3' />
                            <img src={window.interior4} alt="interior-shot" className='int4' />
                        </div>
                    </div>
                </div>
                <br />
                <div className="info-box">
                    <h3 className="host-title">Home hosted by <FontAwesomeIcon className="medal" icon={faMedal}/> {listing.host.first_name} {listing.host.last_name}</h3>
                    <div className="border-line"></div>
                    <br />
                    <div className="attributes">
                        <ul className='icon-list'>
                            <li> <FontAwesomeIcon icon={faHome} className="att-icons"  />  {listing.numBeds} Beds</li>
                            <li> <FontAwesomeIcon icon={faUsers} className="att-icons"   />  {listing.guestNum} Guests</li>
                            <li> <FontAwesomeIcon icon={faClipboardList} className="att-icons"   />    Follow House Rules</li>
                            <li> <FontAwesomeIcon icon={faHandSparkles} className="att-icons"   /> Enhanced Clean </li>
                        </ul>
                    </div>
                    <br />
                </div>
                
                <div className='description-box-show'>
                    <h3 className="desc-title">Description</h3>
                    <p className="show-description"> {listing.description}</p>
                </div>

                <div className="calendar-box">
                    <br />
                    <h2 className="calendar-title">Select check-in date</h2>
                    <p className="cal-desc">Add your travel dates for exact pricing</p>
                    < BookingForm 
                        listing={listing}
                        roundRating={roundRating}
                        reviewNum={reviewNum}
                        createBooking={this.props.createBooking}
                        currentUser = {this.props.currentUser}
                        openModal = {this.props.openModal}
                        
                    />
                </div>
                <br />
                <div className="review-container-show">
                    <ReviewDisplayContainer className="review-display" listing={listing} listingId={listing.id} roundRating={roundRating}
                        reviewNum={reviewNum} reviews={listing.reviews} updateFilter={this.props.updateFilter} />
                    <ReviewFormContainer  listing={listing}   currentUser= {this.props.currentUser} />
                </div>

                <br />

                <div className="show-map-container">
                    <h2 className="map-title">Location</h2>
                    <ListingShowMap 
                        className="show-map"
                        listing={listing}
                        listingId = {listing.id}
                        singleListing={true}
                        updateFilter = {this.props.updateFilter}
                        fetchListing = {this.props.fetchListing}
                        />
                    <h3 className="map-city">{listing.city} </h3>
                </div>
                <br />

                
                <h2 className="things-title">Things to know</h2>
                    <div className="things-to-know">
                        <div className="house-rules-container">
                            <ul>
                                <li className='rules-title'>House rules</li>
                                <li className='rules-item'> <FontAwesomeIcon icon={faClock} className="rules-icons"  />  Check-in: 2:00 PM - 8:00 PM</li>
                                <li className='rules-item'> <FontAwesomeIcon icon={faClock} className="rules-icons"  />  Checkout: 11:00 AM</li>
                                <li className='rules-item'> <FontAwesomeIcon icon={faPaw} className="rules-icons"  /> Pets are allowed </li>
                            </ul>
                        </div>
                        <div className="health-container">
                            <ul>
                                
                                <li className='rules-title' >Health & Safety</li>
                                <div className="rule-cont">
                                    <FontAwesomeIcon icon={faHandSparkles} className="rule-icon"  />
                                    <li className='rules-item'>   Committed to WhereBNB's enhanced cleaning process.</li>
                                </div>
                                <div className="rule-cont">
                                    <FontAwesomeIcon icon={faSprayCan} className="rule-icon"  />
                                    <li className='rules-item'>   WhereBNB's social-distancing and other COVID-19-related guidelines apply</li>
                                </div>
                                <div className="rule-cont">
                                    <FontAwesomeIcon icon={faRadiation} className="rule-icon"  />
                                    <li className='rules-item'>   Carbon monoxide alarm</li>
                                </div>
                                <div className="rule-cont">
                                    <FontAwesomeIcon icon={faFireExtinguisher} className="rule-icon"  /> 
                                    <li className='rules-item'>  Smoke alarm</li>
                                </div>
                            </ul>
                        </div>
                        <div className="cancellation-con">
                            <ul>
                                <li className='rules-title'>Cancellation policy</li>
                                <li className='cancel-day'>Free cancellation until 48 hours before booking</li>
                                <li className='cancel-night'>After that, cancel before check-in and receive a 50% refund, minus the first night and service fee</li>
                            </ul>
                        </div>
                    </div>
            
            </div>
        )
    }
}

export default ListingShow;