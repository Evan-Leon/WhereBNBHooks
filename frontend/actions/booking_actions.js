import * as BookingApiUtils from '../utils/booking_utils';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
})

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
})

export const fetchBookings = () => dispatch => (
    BookingApiUtils.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
)

export const fetchBooking = bookingId => dispatch => (
    BookingApiUtils.fetchBooking(bookingId)
    .then(booking => dispatch(receiveBooking(booking)))
)

export const createBooking = booking => dispatch => {
    
    return(
    BookingApiUtils.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking))))
}

export const updateBooking = booking => dispatch => (
    BookingApiUtils.updateBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
)

export const deleteBooking = bookingId => dispatch => (
    BookingApiUtils.deleteBooking(bookingId)
    .then(() => dispatch(removeBooking(bookingId)))
)
