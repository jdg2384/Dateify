import {
  LOGIN_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false, // do i need this?
  accessToken: '',
  expiresIn: '',
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
