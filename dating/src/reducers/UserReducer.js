// ANYTHING BEING RETURNED FROM SERVER/DB
import { UPDATE_PROPERTY, UPDATE_AGE, GET_USER_LOCATION, } from '../actions/types';

const INITIAL_STATE = {
  age: '',
  gender: '',
  description: 'I\'m not clever enough to write something interesting here',
  latitude: '',
  longitude: '',
  genderPref: '',
  radiusPref: '',
  agePref: '',
  loading: false,
};


export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case UPDATE_PROPERTY:
      return { ...state, [action.payload.prop]: action.payload.value };
    case UPDATE_AGE:
      return { ...state, age: action.value };
      // check out direct manipulation (from bookmarks) to clear text input on faulty input
    case GET_USER_LOCATION:
      return {
        ...state,
        latitude: action.payload.coords.latitude,
        longitude: action.payload.coords.longitude
      };
    default:
      return state;
  }
};
