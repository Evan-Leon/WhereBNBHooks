import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faUsers, faClipboardList, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';


class BookingShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: '',
            deleted: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    componentDidMount() {

        this.props.fetchBookings()
            .then(bookings => this.setState({bookings}))
            

    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevState.bookings.length !== this.state.bookings.length) {
            this.props.fetchBookings()
                .then(bookings => this.setState({ bookings }))
        }
        if (prevProps.filter !== this.props.filter) {
            this.props.fetchBookings()
                // .then(bookings => this.setState({ bookings }))
                .then(bookings => this.setState({ bookings }))
                
        }
        // } else if (prevState.bookings.length !== this.state.bookings.length) {
        //     this.props.fetchBookings(this.props.currentUser)
        //         .then(bookings => this.setState({ bookings }))
        // }
    }

   


    handleDelete(e) {
        e.preventDefault()
        
        this.props.deleteBooking(Number(e.target.value))
            .then(() => this.props.fetchBookings())
            .then(bookings => this.setState({bookings}))
    }

    handleEdit(e) {
        e.preventDefault();
        
        this.props.updateFilter('edit-booking', [e.target.value])
        this.props.openModal('edit-booking')
    }

    render() {

        let { bookings } = this.state.bookings;
        
        if (!bookings) return null;
        
        return (
            <div className="outer-container">
                <h1 className="booking-show-head-title">BOOKINGS</h1>
                <div className="bookings-show-container">
                    {Object.values(bookings).map((booking, i) => (
                        <div key={i} className="booking-show-box">
                            <div className="booking-show-container">
                                <ul className="booking-list">
                                    <div className="booking-title-show">
                                        <li className="booking-show-item">Listing:  </li>
                                        <li> {booking.listing.title}</li>
                                    </div>
                                    <div className="booking-title-show">
                                        <li><FontAwesomeIcon className="city-icon" icon={faCity} /> </li>
                                        <li>{booking.listing.city}</li>
                                    </div>
                                    <div className="booking-title-show">
                                        <li>$/night: </li>
                                        <li>${booking.listing.price}</li>
                                    </div>
                                    <div className="booking-title-show">
                                        <li > Check-in: </li>
                                        <li >{format(new Date(addDays(new Date([booking.checkIn]),1)), "MMM d yyyy")} </li>
                                    </div>
                                    <div className="booking-title-show">
                                        <li > Checkout:</li>
                                        {format(new Date(addDays(new Date([booking.checkOut]),1)), "MMM d yyyy")}
                                    </div>
                                    <div className="booking-title-show">
                                        <li > <FontAwesomeIcon className="users-icon" icon={faUsers} /></li>
                                        <li > {booking.numGuests} </li>
                                    </div>
                                </ul>
                                {/* <li className="rev-date">{format(new Date(rev.createdAt), 'MMMM yyyy')}</li> */}
                                <div className="edit-delete-btns-container-booking">
                                    <button className="edit-delete-btns-book" value={booking.id} onClick={this.handleDelete}>Delete </button>
                                    <button className="edit-delete-btns-book" value={booking.id} onClick={this.handleEdit}>Edit </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            // <div className="review-container">
            //     <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> {this.props.roundRating} ({this.props.reviewNum} reviews)</h3>
            //     {/* <div className="review-box">
            //         <div className='act-review'>
            //             <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Amazing Home</h4>
            //             <p className="review-body">Loved it! Everything about it was just perfect and the host and the location were great!</p>
            //         </div>
            //     </div> */}
            //     <div className='actual-reviews'>



            //             {

            //                 Object.values(reviews).map((review, i) => (
            //                     <div className="review-display-container" key={i}>
            //                         <div className="user-title-container">
            //                             <li className="user-rev" ><FontAwesomeIcon className="rev-user-icon"  icon={faUserCircle}  />{review.guest.first_name} </li>
            //                             <li className="rev-date">{format(new Date(review.createdAt),'MMMM yyyy' )}</li>
            //                         </div>
            //                         <li > {review.body} </li>
            //                     </div>
            //                 ))
            //             }

            //     </div>
            // </div>
        )
    }


}

export default BookingShow;