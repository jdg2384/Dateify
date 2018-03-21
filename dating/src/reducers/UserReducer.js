// ANYTHING BEING RETURNED FROM SERVER/DB
import {
  UPDATE_NAME,
  UPDATE_AGE,
  GET_USER_LOCATION,
  ROOM_JOINED,
  SEND_MESSAGE,
  USER_INFO,
  INITIALIZE_MESSAGES,
  UPDATE_PROPERTY,
  USER_POST,
  SET_CHAT_ID,
  NEXT
} from '../actions/types';


const INITIAL_STATE = {
  id: '',

  name: '',
  age: '24',
  gender: 'Male',
  description: 'I love lamp',


  latitude: '',
  longitude: '',
  desired_gender: 'Female',
  radius: '',
  age_range: '',
  loading: false,
  messages: [],
  socket: null,

  matches: [],

  matchId: null,
  currentIndex: 0,

};


export default (state = INITIAL_STATE, action) => {
  //console.log('actions',action)
  switch (action.type) {
    case USER_POST:
      return { ...state };
    case UPDATE_PROPERTY:
      return { ...state, [action.payload.prop]: action.payload.value };
    case UPDATE_AGE:
      return { ...state, age: action.payload };
      // check out direct manipulation (from bookmarks) to clear text input on faulty input
    case USER_INFO:
      console.log(action.payload);
      // const { gender, age, age_range, radius } = action.payload; // description, lat, long
      return { ...state, matches: action.payload };

    case GET_USER_LOCATION:
      return {
        ...state,
        latitude: action.payload.coords.latitude,
        longitude: action.payload.coords.longitude
      };
    case ROOM_JOINED:
      return { ...state, socket: action.payload };
    case SET_CHAT_ID:
      return { ...state, matchId: action.payload };
    case SEND_MESSAGE:
      console.log(state.messages, action.payload);
      return {
        ...state,
        messages: action.payload
      };
    case NEXT:
      return { ...state, currentIndex: action.payload }
    case INITIALIZE_MESSAGES:
      console.log('HIT IT');
      console.log(action.payload);
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
