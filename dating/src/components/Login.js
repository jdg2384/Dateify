import React, { Component } from 'react';
import Spotify from 'react-native-spotify'
import { NativeModules, Text } from 'react-native';
import { Card, CardSection, Button } from './common';

// eslint-disable-next-line
const SpotifyModule = NativeModules.SpotifyModule;

class Login extends Component {

  log() {
    console.log(Spotify);
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Button onPress={() => this.log()}>
            Click
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default Login;
