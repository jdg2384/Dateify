// ANYTHING BEING RETURNED FROM SPOTIFY
import {
  INITIALIZE_SPOTIFY,
  GET_NAME_AND_IMAGE,
  GET_TOKEN_AND_EXPIRATION,
  GET_MUSIC_INFO,
} from '../actions/types';

const INITIAL_STATE = {
  spotifyInitialized: false,
  loggedIn: false,
  me: '',
  name: 'New User',
  imageURL: '',
  accessToken: '',
  expireTime: '',
  topTracks: [],
  topArtists: [],
  error: '',
  loading: false, // do i need this?
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case INITIALIZE_SPOTIFY:
      return {
        ...state,
        spotifyInitialized: true
      };
    case GET_NAME_AND_IMAGE:
      return {
        ...state,
        name: action.payload.display_name,
        imageURL: action.payload.images[0].url,
      };
    case GET_TOKEN_AND_EXPIRATION:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        expireTime: action.payload.expireTime
      };
    case GET_MUSIC_INFO:
      return {
        ...state,
        [action.prop]: action.payload
      };
    default:
      return state;
  }
};
