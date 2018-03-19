import {
  INITIALIZE,
  GET_USER_LOCATION,
  UPDATE_AGE,
  UPDATE_PROPERTY,
  USER_POST
} from './types';
import axios from 'axios';

export const initializeUser = (dispatch, payload) => {
  dispatch({
    type: INITIALIZE,
    payload
  });
};

export const getUserLocation = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(position => {
      dispatch({ type: GET_USER_LOCATION, payload: position });
    });
    // .then(res => {
    //   console.log(res);
    // });
  };
};

export const userInfo = (id) => {
  return () => {
    axios.get(`https://intense-spire-14562.herokuapp.com/users/${id}`) // ${id}
    .then(response => response)
    .then(data => {
      //console.log('data userinfo',data)
      dispatch({
        type: USER_INFO,
        payload: data,
      });
    })
  }
}

export const updateAge = (value) => {
  return {
      type: UPDATE_AGE,
      payload: value
  };
};

export const updateProperty = ({ prop, value }) => {
  return {
    type: UPDATE_PROPERTY,
    payload: { prop, value }
  };
};

export const userPost=(userData)=>{
  console.log('userPost Click ',userData)
  return () => {
    axios.post('https://intense-spire-14562.herokuapp.com/users', {
      age: userData
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

// return () => {
//   axios.get(`https://intense-spire-14562.herokuapp.com/users/1`) // ${id}
//   .then(response => response)
//   .then(data => {
//     //console.log('data userinfo',data)
//     dispatch({
//       type: USER_INFO,
//       payload: data,
//     });
//   })
// }