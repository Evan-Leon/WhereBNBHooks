import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = state => ({
    currentUser: state.session.id,
   
})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(ReviewForm);