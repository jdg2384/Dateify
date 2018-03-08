import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';
import TrackList from './components/TrackList';

// eslint-disable-next-line
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar initial>
        <Scene key="auth">
          <Scene key="login" component={Login} title="Please Login" initial />
        </Scene>
        <Scene>
          <Scene key="main" component={Main} title="Dating" initial />
          <Scene key="trackList" component={TrackList} title="TrackList" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
