import {
  INITIALIZE,
} from './types';

export const initializeUser = (dispatch, payload) => {
  dispatch({
    type: INITIALIZE,
    payload
  });
};
