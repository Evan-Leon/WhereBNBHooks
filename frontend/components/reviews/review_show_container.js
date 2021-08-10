import { connect } from 'react-redux';
import { fetchUserReviews, deleteReview } from '../../actions/review_actions';
import ReviewShow from './review_show';
import { openModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';

const mSTP = state => ({
    currentUser: state.session.id,
    reviews: Object.values(state.entities.reviews),
    userName: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchUserReviews: () => dispatch(fetchUserReviews()),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    openModal: modal => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(ReviewShow);