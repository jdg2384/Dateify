// ANYTHING BEING RETURNED FROM SERVER/DB
import {
  UPDATE_NAME,
  UPDATE_AGE,
  GET_USER_LOCATION,
  USER_INFO,
  UPDATE_PROPERTY
} from '../actions/types';

const INITIAL_STATE = {
  name:'',
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
  switch (action.type) {
    case UPDATE_PROPERTY:
      return { ...state, [action.payload.prop]: action.payload.value };
    case UPDATE_AGE:
      return { ...state, age: action.payload };
      // check out direct manipulation (from bookmarks) to clear text input on faulty input
    case USER_INFO:
      const { gender, age, age_range, radius } = action.payload // description, lat, long 
      return { ...state, gender, age, age_range, radius }
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
