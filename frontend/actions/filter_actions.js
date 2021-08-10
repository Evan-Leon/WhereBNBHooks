//Thanks to Robert Ballistreri for filter/search help
import { fetchListings } from './listing_actions';
import { changeCity, resetMap } from './map_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER= "CLEAR_FILTER";

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const clearFilter = () => ({
    type: CLEAR_FILTER,
})

export const updateFilter = (filter, value) => (dispatch, getState) => {
    if (filter == 'edit-review'){
        
        dispatch(changeFilter(value))
    }else {
        dispatch(changeFilter(value))
    }
}

export const removeFilter = () => (dispatch, getState) => {
    dispatch(clearFilter());
    // return fetchListings(getState.ui.filters)(dispatch)
}