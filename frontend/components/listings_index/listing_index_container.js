import { connect } from 'react-redux';
import ListingsIndex from './listings_index'
import { fetchListings } from '../../actions/listing_actions'
import { updateFilter } from '../../actions/filter_actions';


const mSTP = (state = {}) =>({
    
    listings: Object.values(state.entities.listings)
})

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(ListingsIndex);