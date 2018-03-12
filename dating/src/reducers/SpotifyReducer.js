// ANYTHING BEING RETURNED FROM SPOTIFY

import {
  GET_NAME_AND_IMAGE,
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
    // case LOGIN_USER_FAIL ?

    default:
      return state;
  }
};
