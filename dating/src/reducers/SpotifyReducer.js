// ANYTHING BEING RETURNED FROM SPOTIFY

import {
  GET_NAME_AND_IMAGE,
  INITIALIZE_NAME,
  INITIALIZE_IMAGE_URL
} from '../actions/types';

const INITIAL_STATE = {
  me: '',
  name: '',
  imageURL: '',
  accessToken: '',
  expiresIn: '',
  topTracks: [],
  topArtists: [],
  error: '',
  loading: false, // do i need this?
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case GET_NAME_AND_IMAGE:
      return {
        ...state,
        name: action.payload.display_name,
        imageURL: action.payload.images[0].url,
      };
    case INITIALIZE_NAME:
      return {
        ...state,
        name: action.payload.name
      };
    case INITIALIZE_IMAGE_URL:
      return {
        ...state,
        imageURL: action.payload.url
      };
    // case LOGIN_USER_FAIL ?

    default:
      return state;
  }
};
