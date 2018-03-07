import React, { Component } from 'react';
import { NativeModules, Text } from 'react-native';
import { Card, CardSection, Button } from './common';

// eslint-disable-next-line
const SpotifyModule = NativeModules.SpotifyModule;

class Login extends Component {

  log() {
    console.log(NativeModules);
    console.log(NativeModules.SpotifyModule);
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Text>
            Hello
          </Text>
        </CardSection>

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
