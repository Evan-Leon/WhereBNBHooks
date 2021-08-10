import { connect } from 'react-redux';

import {updateFilter } from '../../actions/filter_actions';
import {asArray } from '../../reducers/selectors';
import Search from './search';
import { fetchSearch } from '../../actions/listing_actions';
import SearchIndex from './search_index';

const mSTP = (state, ownProps) => (
    {
    search: state.entities.listings[ownProps.match.params.search],
    currentUser: state.session.id,
    listings: Object.values(state.entities.listings)
});

const mDTP = dispatch => ({
    fetchSearch: searchString => dispatch(fetchSearch(searchString)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(SearchIndex);