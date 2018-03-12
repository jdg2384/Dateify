import Spotify from 'react-native-spotify';
import {
  GET_NAME_AND_IMAGE,
  GET_TOKEN_AND_EXPIRATION,
  GET_MUSIC_INFO,
  TOGGLE
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
        dispatch({ type: GET_TOKEN_AND_EXPIRATION, payload: res });
      });
  };
};

export const getMusicInfo = (prop, token) => {
  return (dispatch, getState) => {
    const { accessToken } = getState();
    console.log('token', accessToken);

    fetch(`https://api.spotify.com/v1/me/top/${prop}?limit=50&time_range=long_term`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    })
    .then(response => response.json())
    .then(json => {
      // console.log(json.items);
      if (prop === 'artists') {
        dispatch({ type: GET_MUSIC_INFO, prop: 'topArtists', payload: json.items });
      }
      if (prop === 'tracks') {
        dispatch({ type: GET_MUSIC_INFO, prop: 'topTracks', payload: json.items });
      }
    });
  };
};
