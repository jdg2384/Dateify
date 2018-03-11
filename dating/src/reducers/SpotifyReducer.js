import {
  LOGIN_USER_SUCCESS,
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

    case LOGIN_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        ...INITIAL_STATE,
        accessToken: action.payload.accessToken,
        expiresIn: action.payload.expiresIn
      };

    // case LOGIN_USER_FAIL ?

    default:
      return state;
  }
};