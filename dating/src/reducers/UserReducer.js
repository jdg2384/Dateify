// info about user : top tracks, etc..
import INITIALIZE from '../actions/types';

const INITIAL_STATE = {
  name: '',
  token: '',
  imageURL: '',
  topTracks: [],
  topArtists: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);


  switch (action.type) {
    case INITIALIZE:
      const { name, token, imageURL, topTracks, topArtists } = action.payload;
      return { ...state, name, token, imageURL, topTracks, topArtists };
    default:
      return state;
  }
};
