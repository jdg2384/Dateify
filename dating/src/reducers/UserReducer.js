// info about user : top tracks, etc..
import { INITIALIZE, UPDATE_PROPERTY, UPDATE_AGE, } from '../actions/types';

const INITIAL_STATE = {
  age: '',
  gender: '',
  description: 'I\'m not clever enough to write something interesting here',
  location: '',
  genderPref: '',
  radiusPref: '',
  agePref: '',
  loading: false,
};


export default (state = INITIAL_STATE, action) => {
  console.log(action);


  switch (action.type) {
    case INITIALIZE: //unexpected lexical declaration?? 
      const { name, token, imageURL, topTracks, topArtists } = action.payload;
      return { ...state, name, token, imageURL, topTracks, topArtists };
    case UPDATE_PROPERTY:
      return { ...state, [action.payload.prop]: action.payload.value };
    case UPDATE_AGE:
      return { ...state, age: action.value };
      // check out direct manipulation (from bookmarks) to clear text input on faulty input
    default:
      return state;
  }
};
