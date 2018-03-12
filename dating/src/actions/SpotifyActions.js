import Spotify from 'react-native-spotify';
import {
  GET_NAME_AND_IMAGE,
  INITIALIZE_NAME,
  INITIALIZE_IMAGE_URL
} from './types';

export const initializeName = () => {
  return (dispatch) => {
    const name = getMyInfo('display_name');
    console.log(name);
    dispatch({
      type: INITIALIZE_NAME,
      payload: name
    });
  };
};

export const initializeImageURL = imageURL => {
  return {
    type: INITIALIZE_IMAGE_URL,
    payload: imageURL
  };
};

export const setMeInState = obj => {
  return {
    type: INITIALIZE_ME,
    payload: obj
  };
};

export const getNameAndImage = () => {
  return (dispatch) => {
    Spotify.getMe((res, error) => {
      if (res) {
        // console.log(res);
        dispatch({ type: GET_NAME_AND_IMAGE, payload: res });
      }
      if (error) {
        console.log('something bad happened');
        console.log(error);
      }
    });
  };

  // return function (dispatch) {
  //   const obj = getMyInfo();
  //   console.log(obj);
  //   dispatch({ type: INITIALIZE_ME, payload: obj });
  // };
};

const getMyInfo = () => {
  Spotify.getMe((res, error) => {
    if (res) {
      console.log(res);
      return res;
    }
    if (error) {
      console.log('something went wrong');
      console.log(error);
    }
  });
};
