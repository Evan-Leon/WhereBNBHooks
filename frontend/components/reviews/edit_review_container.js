import { connect } from 'react-redux';
import { updateReview, fetchSingleReview, deleteReview } from '../../actions/review_actions';
import EditReview from './edit_review';
import { closeModal } from '../../actions/modal_actions';
import { removeFilter } from '../../actions/filter_actions';

const mSTP = state => 
{

    
    return({
    currentUser: state.session.id,
    reviewId: Object.keys(state.ui.filters),
    reviews: Object.values(state.entities.reviews)
    })
}

const mDTP = dispatch => ({
    updateReview: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal()),
    fetchSingleReview: reviewId => dispatch(fetchSingleReview(reviewId)),
    removeFilter: () => dispatch(removeFilter()),
    deleteReview: reviewId => dispatch(deleteReview)
})

export default connect(mSTP, mDTP)(EditReview);