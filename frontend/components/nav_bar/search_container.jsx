import { connect } from 'react-redux';

import {updateFilter } from '../../actions/filter_actions';
import {asArray } from '../../reducers/selectors';
import Search from './search';
import { fetchSearch } from '../../actions/listing_actions';

const mSTP = state => ({
    listings: state.entities,
    cities: state.entities.city,
    filters: state.ui.filters,
    map: state.ui.map, 

})

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchSearch: searchString => dispatch(fetchSearch(searchString)),
})

export default connect(mSTP, mDTP)(Search);