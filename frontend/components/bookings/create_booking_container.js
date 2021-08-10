import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions'

const mSTP = state => ({
    booking: {
        checkIn: new Date(),
        checkOut: new Date(),
    },
    formType: 'Create Booking'
})

const mDTP = dispatch => ({
    action: post => dispatch(createBooking(post))
})

export default connect(mSTP, mDTP)(BookingForm);