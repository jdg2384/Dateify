import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import { initializeSpotify, login } from '../actions';

class Login extends Component {
  componentDidMount() {
		if (!this.props.spotifyInitialized) {
      this.props.initializeSpotify();
		}
	}

  render() {
    const { container, normalText, button, image } = styles;

    return (
      <View style={container}>
        <Text style={normalText}>
          Spotify Dating
        </Text>
        <TouchableHighlight style={button} onPress={() => this.props.login()}>
          <Image resizeMode={'contain'} style={image} source={require('../assets/login-button-mobile.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 45,
    borderRadius: 64
  },
  image: {
    width: 250,
    height: 50
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  btnText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
});

const mapStateToProps = state => {
  const { spotifyInitialized, loggedIn } = state.spotify;

  return { spotifyInitialized, loggedIn };
};

export default connect(mapStateToProps, { initializeSpotify, login })(Login);
