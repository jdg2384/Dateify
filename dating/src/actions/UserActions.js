import {
  INITIALIZE
} from './types';

export const initializeUser = (dispatch, { name, token, imageURL, topTracks, topArtists }) => {
  dispatch({
    type: INITIALIZE,
    payload: { name, token, imageURL, topTracks, topArtists }
  });
};
