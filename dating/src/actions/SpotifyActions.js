import Spotify from 'react-native-spotify';
import {
  GET_NAME_AND_IMAGE,
  GET_TOKEN_AND_EXPIRATION,
} from './types';

export const getNameAndImage = () => {
  return (dispatch) => {
    Spotify.getMe((res, error) => {
      if (res) {
        dispatch({ type: GET_NAME_AND_IMAGE, payload: res });
      }
      if (error) {
        console.log('something bad happened');
        console.log(error);
      }
    });
  };
};

export const getTokenAndExpiration = () => {
  return (dispatch) => {
      Spotify.getAuthAsync((res) => {
        // console.log(res);
        // check token expire time - if it is less than __some amount__ from
        // current time --> use refresh token to request new one
        dispatch({ type: GET_TOKEN_AND_EXPIRATION, payload: res })
      });
  }
}
