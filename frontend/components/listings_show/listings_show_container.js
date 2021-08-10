import { connect } from 'react-redux';

import ListingShow from './listings_show';
import { fetchListing } from '../../actions/listing_actions';
import { createBooking } from '../../actions/booking_actions';
import { fetchListingReviews } from '../../actions/review_actions';
import { updateFilter } from '../../actions/filter_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => (
    {
    listing: state.entities.listings[ownProps.match.params.listingId],
    currentUser: state.session.id,
    
});

const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchListingReviews: listingId => dispatch(fetchListingReviews(listingId)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(ListingShow);