import SocketIOClient from 'socket.io-client';

import {
  INITIALIZE,
  GET_USER_LOCATION,

  ROOM_JOINED,
  SEND_MESSAGE

  UPDATE_AGE,
  UPDATE_PROPERTY,
  USER_POST

} from './types';
import axios from 'axios';

let socket = '';

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


export const joinRoom = () => {
  console.log('in this room');
  socket = SocketIOClient('http://localhost:3000', { jsonp: false, transports: ['websocket'] });

  socket.emit('joinTable1', 'table1'); // will have to make these dynamic
  // room name is table 1 right now -- will have to make the room name the match number

  // Actions.table()
  console.log(socket);
  return {
    type: ROOM_JOINED,
    payload: socket
  };
};

export const sendMessage = (message) => {
  return async (dispatch) => {
    socket.emit('sendMessage', message);
    // dispatch({
    //   type: SEND_MESSAGE,
    //   payload: message
    // });
    console.log('message send', message);
    socket.on('server message response', (data) => {
      dispatch({
        type: SEND_MESSAGE,
        payload: data
      });
    });
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

