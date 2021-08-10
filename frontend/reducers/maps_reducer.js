import { CHANGE_CITY, RESET_MAP } from '../actions/map_actions';

const nyc = {
    center:{
        latitude: 40.730610, 
        longitude: -73.935242 
    },
    zoom:6
}

const MapsReducer = (state = nyc, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_CITY:
            if (action.center.lat) {
                return {
                    center: action.center,
                    zoom: action.zoom
                }
            } else {
                return nyc;
            }
        case RESET_MAP:
            return nyc;
        default:
            return state;
    }
}

export default MapsReducer;