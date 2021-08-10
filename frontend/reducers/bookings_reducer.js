import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, REMOVE_BOOKING} from '../actions/booking_actions'

const BookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKINGS:
           
            return Object.assign({}, state, action.bookings)
        case RECEIVE_BOOKING:
            
            return Object.assign({}, state, {[action.booking.id]: action.booking})
        case REMOVE_BOOKING:
            let nextState = Object.assign({}, state)
            delete nextState[action.bookingId]
            return nextState;
        default:
            return state;
    }
}

export default BookingsReducer;