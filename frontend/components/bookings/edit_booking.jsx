import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking ,updateBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';
import { Link } from 'react-router-dom';

class EditBooking extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            booking: {
                checkIn: new Date(),
                checkOut: new Date(),
                numGuests: 0,
                errors: [],
                booked: false
            }
        }
        // this.handleSelect = this.handleSelect.bind(this);
        this.updateDates = this.updateDates.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);

    }

    componentDidMount() {
       
        // this.props.fetchBooking(Number(this.props.bookingId[0]))
        //     .then(booking => this.setState({booking}))
        // this.setState({booking:this.props.bookings[Number(this.props.bookingId[0])]})
        this.setState({ booking: this.props.bookings.filter(booking => booking.id === Number(this.props.bookingId[0]))[0]})
       
    }

    handleSubmit(e) {
        e.preventDefault();
       
        const booking = {
            id: this.state.booking.id,
            check_in: this.state.booking.checkIn,
            check_out: new Date(addDays(new Date([this.state.booking.checkOut]), 1)),
            guest_id: this.props.currentUser,
            listing_id: this.state.booking.listing.id,
            num_guests: this.state.booking.numGuests
        }

        this.props.updateBooking(booking)
            // .then(() => this.props.deleteBooking(booking.id))
            .then(this.props.fetchBookings())
            .then(this.props.closeModal())
            .then(this.props.removeFilter())
            
    }

    // updateBody(e) {

    //     let booking = { ...this.state.booking }
    //     // review.body = e.target.value;

    //     this.setState({ booking })
    // }

    // updateRating(e) {

    //     let review = { ...this.state.review }
    //     review.rating = e.target.value;

    //     this.setState({ review })
    // }

    handleGuest(e) {
        let booking = { ...this.state.booking }
        booking.numGuests = e.target.value;

        this.setState({ booking })
        
       
    }

    updateDates(e) {
        let { startDate, endDate } = e.selection;
        let booking = { ...this.state.booking }
        booking.checkIn = startDate;
        booking.checkOut = endDate;

        this.setState({booking});
       
    }

    render() {

        
        

        const priceFormatter =
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });

        // if (!this.state.booking.listing) return null;
        let { booking } = this.state;
        if (booking.numGuests === 0) return null;
       
        let selectionRange = {
            startDate: new Date([booking.checkIn]),
            endDate: new Date([booking.checkOut]),
            key: 'selection',
        }
        
        return (
            <div className="edit-booking-form-out-container">
                <h3 className="edit-booking-form-box-title">Edit your booking:</h3>
                <div className="edit-booking-form-container">
                    <form onSubmit={this.handleSubmit} className="edit-res-form">
                        <div className="date-range-box">
                            <DateRange
                                className="range-picker"
                                ranges={[selectionRange]}
                                onChange={this.updateDates}
                                editableDateInputs={true}
                                showSelectionPreview={true}
                                months={1}
                                direction="horizontal"
                                showDateDisplay={false}
                                showMonthAndYearPickers={false}
                                minDate={new Date()}
                                // disabledDates={noDates}
                            />
                        </div>
                        <div className='booking-box-out-container'>
                            <div className="edit-booking-box">
                                <div className="edit-booking-box-header">
                                    <div className="price-container">
                                        <p className="box-price">${booking.listing.price}</p>
                                        <p className="night">/night</p>
                                    </div>
                                </div>
                                <div className="check-in-out">
                                    <div className="check-in-container">
                                        <label className="check-label" >CHECK-IN</label>
                                        <p className="check-in">{format(new Date([booking.checkIn]), "MMM d yyyy")}</p>
                                    </div>
                                    <div className="check-out-container">
                                        <label className="check-label" >CHECKOUT</label>
                                        <p className="check-out">{format(addDays(new Date([booking.checkOut]), 1), "MMM d yyyy")}</p>
                                    </div>

                                </div>
                                <div className="edit-guests-container">
                                    <label className="guest-label" htmlFor="num-guests">GUESTS</label>
                                    <select className="num-guests" id="num-guests" value={booking.numGuests} onChange={this.handleGuest}>
                                        <option value="1">1 guest</option>
                                        <option value="2">2 guests</option>
                                        <option value="3">3 guests</option>
                                        <option value="4">4 guests</option>
                                        <option value="5">5 guests</option>
                                        <option value="6">6 guests</option>
                                        <option value="7">7 guests</option>
                                        <option value="8">8 guests</option>
                                        <option value="9">9 guests</option>
                                    </select>
                                </div>
                                <div className="cost">
                                    <div className="night-cost">
                                    <p>${booking.listing.price} x {formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), {unit: 'day'})}</p>
                                    <p>${([booking.listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1),{unit: 'day'}).slice(0, 2)])}</p>
                                    </div>
                                    <div className="services">
                                        <p>Service Fee</p>
                                        <p>$57.00</p>
                                    </div>
                                    <div className="taxes">
                                        <p>Occupancy taxes and fees</p>
                                        <p>{priceFormatter.format((([booking.listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), {unit: 'day'}).slice(0, 2)])) * (.05))}</p>
                                    </div>
                                    <div className="total">
                                        <p>Total</p>
                                        <p>{priceFormatter.format(([booking.listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), { unit: 'day' }).slice(0, 2)])
                                            + (([booking.listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), { unit: 'day' }).slice(0, 2)])) * (.05)
                                            + (57))}</p>
                                    </div>
                                </div>

                                <button className="booking-sub" type="submit" >Edit Booking</button>
                                

                            </div>
                        </div>
                    </form>
            </div>
            </div>
        )
    }
    
}

export default withRouter(EditBooking);
