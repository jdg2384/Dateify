import Spotify from 'react-native-spotify';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import {
  INITIALIZE_SPOTIFY,
  GET_NAME_AND_IMAGE,
  GET_TOKEN_AND_EXPIRATION,
  GET_MUSIC_INFO,
  UPDATE_NAME
} from './types';


const spotifyOptions = {
  clientID: 'f4a3b66de8d54f50bb290003986af099',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'spotifydating://returnafterlogin',
  scopes: ['user-read-private',
  'playlist-read',
  'playlist-read-private',
  'user-top-read'],
  //tokenSwapURL,
  //tokenRefreshURL
};


export const initializeSpotify = () => {
  return (dispatch) => {
    Spotify.initialize(spotifyOptions, (loggedIn, error) => {
      if (error) console.log(error.message);
      dispatch({ type: INITIALIZE_SPOTIFY });
      //handle initialization
      if (loggedIn) {
        Actions.main();
      }
    });
  };
};

export const login = () => {
  return () => {
    Spotify.login((loggedIn, error) => {
      if (error) console.log(error);
      if (loggedIn) {
        // ** Check if user has required info already -  if not, take them to form page
        // ** If they do have required info - go to main page
        console.log('great success');
        Actions.main();
      }
    });
  };
};

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
      if (prop === 'artists') {
        dispatch({
          type: GET_MUSIC_INFO,
          prop: 'topArtists',
          reset: 'topTracks',
          payload: json.items
        });
      }
      if (prop === 'tracks') {
        dispatch({
          type: GET_MUSIC_INFO,
          prop: 'topTracks',
          reset: 'topArtists',
          payload: json.items
        });
      }
    });
  };
};

export const updateName = (value) => {
  return {
      type: UPDATE_NAME,
      payload: value
  }
};

