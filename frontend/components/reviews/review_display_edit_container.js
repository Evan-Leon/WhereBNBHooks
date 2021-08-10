import { connect } from 'react-redux';
import { updateReview, fetchSingleReview, deleteReview } from '../../actions/review_actions';
import ReviewDisplayEdit from './review_display_edit';
import { closeModal } from '../../actions/modal_actions';
import { removeFilter } from '../../actions/filter_actions';

const mSTP = state => {

    
    return ({
        currentUser: state.session.id,
        reviews: Object.values(state.entities.reviews),
        review: state.entities.reviews,
        reviewId: Object.keys(state.ui.filters)[0]
    })
}

const mDTP = dispatch => ({
    updateReview: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal()),
    fetchSingleReview: reviewId => dispatch(fetchSingleReview(reviewId)),
    removeFilter: () => dispatch(removeFilter()),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(ReviewDisplayEdit);