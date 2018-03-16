// ANYTHING BEING RETURNED FROM SERVER/DB
import {
  UPDATE_PROPERTY,
  UPDATE_AGE,
  GET_USER_LOCATION,
  ROOM_JOINED,
  SEND_MESSAGE,
} from '../actions/types';

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
  messages: [],
  socket: null
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
    case ROOM_JOINED:
      console.log(action.payload);
      return { ...state, socket: action.payload };
    case SEND_MESSAGE:
      console.log(state.messages, action.payload);
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};
