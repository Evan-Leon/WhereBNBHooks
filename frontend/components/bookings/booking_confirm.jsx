import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking, updateBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';
import { Link } from 'react-router-dom';

class BookingConfirm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            booking: {
                checkIn: new Date(),
                checkOut: new Date(),
                numGuests: 2,
                errors: [],
                booked: false
            },
            errors:'',
            errored: false
        }
        // this.handleSelect = this.handleSelect.bind(this);
        this.updateDates = this.updateDates.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);

    }

   

    componentDidUpdate(prevProps, prevState) {
        
        if (prevState.errors !== this.state.errors) {
            this.setState({ errored: true })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.props.currentUser){
            this.setState({errors: "Please login to create booking"})
        }
        else{
            
            const booking = {
                check_in: this.state.booking.checkIn,
                check_out: new Date(addDays(new Date([this.state.booking.checkOut]), 1)),
                guest_id: this.props.currentUser,
                listing_id: this.props.listing.id,
                num_guests: this.state.booking.numGuests
            }
        
            this.props.createBooking(booking)
               .then(this.props.closeModal())
                .then(this.props.history.push(`/bookings/${this.props.currentUser}`))
        }
        // this.props.updateBooking(booking)
            // .then(() => this.props.deleteBooking(booking.id))
            // .then(this.props.closeModal())
            // .then(this.props.removeFilter())
            // .then(this.props.history.push(`/listings/${this.state.booking.listing.id}`))
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

        this.setState({ booking });

    }

    render() {

        let { booking } = this.state;
        let {listing} = this.props;
        if (!listing) return null;
        
        let selectionRange = {
            startDate: new Date([booking.checkIn]),
            endDate: new Date([booking.checkOut]),
            key: 'selection',
        }

        const priceFormatter =
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        
        if (!this.state.errored){
        return (
            <div className="booking-confirm-form-out-container">
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
                                        <p className="box-price">${listing.price}</p>
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
                                    <select className="num-guests" id="num-guests" value={listing.numGuests} onChange={this.handleGuest}>
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
                                        <p>${listing.price} x {formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), { unit: 'day' })}</p>
                                        <p>{priceFormatter.format(([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), { unit: 'day' }).slice(0, 2)]))}</p>
                                    </div>
                                    <div className="services">
                                        <p>Service Fee</p>
                                        <p>$57.00</p>
                                    </div>
                                    <div className="taxes">
                                        <p>Occupancy taxes and fees</p>
                                        <p>{priceFormatter.format((([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), { unit: 'day' }).slice(0, 2)])) * (.05))}</p>
                                    </div>
                                    <div className="total">
                                        <p>Total</p>
                                        <p>{priceFormatter.format(([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), { unit: 'day' }).slice(0, 2)])
                                            + (([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1), { unit: 'day' }).slice(0, 2)])) * (.05)
                                            + (57))}</p>
                                    </div>
                                </div>

                                <button className="booking-sub" type="submit" >Book</button>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }else{
            return (
                <div className="booking-confirm-form-out-container">
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
                                            <p className="box-price">${listing.price}</p>
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
                                            <p className="check-out">{format(new Date([booking.checkOut]), "MMM d yyyy")}</p>
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
                                            <p>${listing.price} x {formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1))}</p>
                                            <p>${([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1)).slice(0, 1)])}</p>
                                        </div>
                                        <div className="services">
                                            <p>Service Fee</p>
                                            <p>$57</p>
                                        </div>
                                        <div className="taxes">
                                            <p>Occupancy taxes and fees</p>
                                            <p>${(([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1)).slice(0, 1)])) * (.05)}</p>
                                        </div>
                                        <div className="total">
                                            <p>Total</p>
                                            <p>${([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1)).slice(0, 1)])
                                                + (([listing.price]) * ([formatDistanceStrict(new Date([booking.checkIn]), addDays(new Date([booking.checkOut]), 1)).slice(0, 1)])) * (.05)
                                                + (57)}</p>
                                        </div>
                                    </div>
                                    <p className="errors">{this.state.errors}</p>
                                    <button className="booking-sub" type="submit" >Book</button>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
    }}

}

export default withRouter(BookingConfirm);