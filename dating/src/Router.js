import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';
import TrackList from './components/TrackList';
import ChatList from './components/ChatList';

// eslint-disable-next-line
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar initial>
        <Scene key="auth">
          <Scene key="login" component={Login} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
          component={Main}
          title="User"
          initial
          rightTitle="Chat List"
          onRight={() => {
            Actions.chat();
          }}
          />
          <Scene key="chat" component={ChatList} title="Chat List" />
          <Scene key="trackList" component={TrackList} title="TrackList" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
