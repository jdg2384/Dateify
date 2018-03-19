import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';
// import ChatList from './components/ChatList';
import UserInfoForm from './components/UserInfoForm';
import ChatExample from './components/ChatExample';
import MatchList from './components/MatchList';

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
          leftTitle="About Me"
          onLeft={() => {
            Actions.userInfoForm();
          }}
          rightTitle="Chat List"
          onRight={() => {
            Actions.matchList();
          }}
          />
          <Scene key="userInfoForm" component={UserInfoForm} title="About Me" />
          <Scene key="matchList" component={MatchList} title="Match List"
            rightTitle="Talk"
            onRight={() => {
            Actions.chatEx();
          }} />
          <Scene key="chatEx" component={ChatExample} title="Chat" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
