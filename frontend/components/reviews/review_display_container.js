import { connect } from 'react-redux';
import { deleteReview, fetchListingReviews, updateReview } from '../../actions/review_actions';
import {openModal, closeModal} from '../../actions/modal_actions'
import ReviewDisplay from './review_display';

const mSTP = state => {
    
    return ({
    currentUser: state.session.id,
    reviews: Object.values(state.entities.reviews)
})}

const mDTP = dispatch => ({
    fetchListingReviews: listingId => dispatch(fetchListingReviews(listingId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    deleteReview: revId => dispatch(deleteReview(revId)),
    updateReview: review => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(ReviewDisplay);