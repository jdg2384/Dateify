import { Actions } from 'react-native-router-flux';

import {
  LOGIN_USER_SUCCESS,
} from './types';

export const loginUserSuccess = (dispatch, { accessToken, expiresIn }) => {
  // why do i have to use dispatch here? something about the asynchronicity i think...
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { accessToken, expiresIn } // set token here?
  });

  Actions.main();
};
