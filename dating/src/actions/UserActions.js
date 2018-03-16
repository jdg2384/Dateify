import SocketIOClient from 'socket.io-client';

import {
  INITIALIZE,
  GET_USER_LOCATION,
  ROOM_JOINED,
  SEND_MESSAGE
} from './types';

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
    dispatch({
      type: SEND_MESSAGE,
      payload: message
    });
    console.log('message send', message);
  };
};
