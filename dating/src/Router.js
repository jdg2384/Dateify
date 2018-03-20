import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';
// import ChatList from './components/ChatList';
import UserInfoForm from './components/UserInfoForm';
import ChatExample from './components/ChatExample';
import MatchList from './components/MatchList';
import Greta from './components/Greta';
import Tara from './components/Tara';
import GretaMusic from './components/GretaMusic';
import Dating from './components/Dating';

import Chat from './assets/chat.png';
import Profile from './assets/profile.png';
import Logo2 from './assets/logo4.png';
import hp from './assets/hp.png';
import babe from './assets/babe.png';
import three from './assets/3.png';

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
          navigationBarStyle={{ backgroundColor: 'white' }}
          navigationBarTitleImage={Logo2}
          navigationBarTitleImageStyle={{ height: 40, width: 65 }}
          initial
          leftButtonImage={Chat}
          leftButtonStyle={{ marginLeft: 80 }}
          onLeft={() => {
            Actions.matchList();
          }}
          // rightTitle="Chat List"
          rightButtonImage={Profile}
          rightButtonStyle={{ marginRight: 80 }}
          onRight={() => {
            Actions.userInfoForm();

          }}
          />
          <Scene key="userInfoForm" component={UserInfoForm} title="About Me" />
          <Scene key="matchList" component={MatchList} title="Match List" navBarButtonColor='#24d44e' />
          <Scene
            key="dating"
            component={Dating}
            title="Dating"
            leftButtonImage={Chat}
            leftButtonStyle={{ marginLeft: 80 }}
            onLeft={() => {
              Actions.matchList();
            }}
          />
          <Scene key="chatEx" component={ChatExample} title="Chat" />
          <Scene
            key="greta"
            component={Greta}
            // title="Greta"
            navBarButtonColor='#24d44e'
            navigationBarTitleImage={babe}
            navigationBarTitleImageStyle={{ height: 40, width: 40 }}
            rightButtonImage={hp}
            rightButtonStyle={{ marginRight: -205 }}
            onRight={() => Actions.gretaMusic()}
          />
          <Scene key="gretaMusic" component={GretaMusic} navBarButtonColor='#24d44e' />
          <Scene
            key="tara"
            component={Tara}
            // title="Greta"
            navBarButtonColor='#24d44e'
            navigationBarTitleImage={three}
            navigationBarTitleImageStyle={{ height: 40, width: 40 }}
            rightButtonImage={hp}
            rightButtonStyle={{ marginRight: -205 }}
            onRight={() => Actions.gretaMusic()}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
