import {
  LOGIN_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  error: '',
  loading: false,
  token: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    default:
      return state;
  }
};
