import SocketIOClient from 'socket.io-client';
import axios from 'axios';

import {
  INITIALIZE,
  GET_USER_LOCATION,
  ROOM_JOINED,
  SEND_MESSAGE,
  UPDATE_AGE,
  UPDATE_PROPERTY,
  USER_POST,
  SET_CHAT_ID,
  INITIALIZE_MESSAGES,
  NEXT
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


export const joinRoom = (matchId) => {
  socket = SocketIOClient('http://localhost:3001', { jsonp: false, transports: ['websocket'] });

  socket.emit('joinChat', matchId);

  return {
    type: ROOM_JOINED,
    payload: socket
  };
};

export const sendMessage = (message, matchId) => {
  return async (dispatch) => {
    socket.emit('sendMessage', message, matchId);
    // dispatch({
    //   type: SEND_MESSAGE,
    //   payload: message
    // });
    console.log('message send', message, matchId);
    socket.on('server message response', (data) => {
      console.log(data);
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

export const userPost = (userData) => {
  console.log('userPost Click ', userData)
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

export const setChatId = matchId => {
  console.log(matchId);
  return {
    type: SET_CHAT_ID,
    payload: matchId
  };
};

export const fetchMessages = (matchId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/messages/${matchId}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(json => {
      const messages = json.map(message => message.text);
      console.log(messages);
      // console.log(json);
      dispatch({
        type: INITIALIZE_MESSAGES,
        payload: messages
      });
    });
  };
};

export const goToNext = currentIndex => {
  return {
    type: NEXT,
    payload: currentIndex + 1,
  };
};

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
