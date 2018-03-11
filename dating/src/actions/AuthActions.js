import { Actions } from 'react-native-router-flux';

import {
  LOGIN_USER_SUCCESS,
} from './types';

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
