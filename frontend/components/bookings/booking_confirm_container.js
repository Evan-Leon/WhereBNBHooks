import { connect } from 'react-redux';
import { createBooking, fetchBooking, deleteBooking } from '../../actions/booking_actions';
import BookingConfirm from './booking_confirm';
import { closeModal } from '../../actions/modal_actions';
import { removeFilter } from '../../actions/filter_actions';

const mSTP = state => {
    
    return ({
        currentUser: state.session.id,
        listing: Object.values(state.entities.reviews)[0].listing,
        
       
    })
}

const mDTP = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking)),
    closeModal: () => dispatch(closeModal()),
    fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
    removeFilter: () => dispatch(removeFilter()),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
})

export default connect(mSTP, mDTP)(BookingConfirm);