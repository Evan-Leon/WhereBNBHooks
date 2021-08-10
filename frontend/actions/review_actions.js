import * as ReviewApiUtils from '../utils/review_utils';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchUserReviews = () => dispatch => (
    ReviewApiUtils.fetchUserReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchListingReviews = listingId => dispatch => (
    ReviewApiUtils.fetchListingReviews(listingId)
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchSingleReview = reviewId => dispatch => (
    ReviewApiUtils.fetchSingleReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => {
    return(
    ReviewApiUtils.createReview(review)
    .then(review => dispatch(receiveReview(review)), 
    err => (dispatch(receiveReviewErrors(err.responseJSON)))))
}

export const updateReview = review => dispatch => (
    ReviewApiUtils.updateReview(review)
    .then(review => dispatch(receiveReview(review)),
    err => (dispatch(receiveReviewErrors(err.responseJSON))))
)

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtils.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)