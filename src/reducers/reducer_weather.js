import { FETCH_LOCATION, FETCH_WEATHER } from '../actions/index';

const INITIAL_STATE = { location: null, weather: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATION:
    return { ...state, location: action.payload.data };
    break;
    case FETCH_WEATHER:
    console.log('REDUCER FETCH WEATHER CALLED', action.payload.data);
    return { ...state, weather: action.payload.data.data.weather };
    break;
  }
  return state;
}
