// ANYTHING BEING RETURNED FROM SPOTIFY

import {
  LOGIN_USER_SUCCESS,
  INITIALIZE_NAME,
  INITIALIZE_IMAGE_URL
} from '../actions/types';

const INITIAL_STATE = {
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
