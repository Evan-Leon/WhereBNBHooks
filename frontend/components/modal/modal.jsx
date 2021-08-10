import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import EditBookingContainer from '../bookings/edit_booking_container';
// import BookingFormContainer from '../bookings/create_booking_container';
import EditReviewContainer from '../reviews/edit_review_container';
import ReviewDisplayEditContainer from '../reviews/review_display_edit_container';
import { removeFilter } from '../../actions/filter_actions';
import BookingConfirmContainer from '../bookings/booking_confirm_container';


function Modal({modal, closeModal, removeFilter}) {
    if (!modal){
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = < LoginFormContainer/>;
            break;
        case 'signup':
            component = <SignupFormContainer/>;
            break;
        case 'edit-review':
            component = <EditReviewContainer />;
            break;
        case 'edit-booking':
            component = <EditBookingContainer />;
            break;
        case 'booking-confirm':
            component = <BookingConfirmContainer />;
            break;
        case 'review-display-edit-container':
            component = <ReviewDisplayEditContainer/>;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    removeFilter: () => dispatch(removeFilter())
})

export default connect(mSTP, mDTP)(Modal);