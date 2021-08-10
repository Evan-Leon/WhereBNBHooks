import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import FiltersReducer from './filters_reducer';
import MapsReducer from './maps_reducer';

const UiReducer = combineReducers({
    modal: ModalReducer,
    filters: FiltersReducer,
    map: MapsReducer
});

export default UiReducer;