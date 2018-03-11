import React, { Component } from 'react';
import Spotify from 'react-native-spotify';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { loginUserSuccess } from '../actions';


const spotifyOptions = {
  clientID: 'f4a3b66de8d54f50bb290003986af099',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'spotifydating://returnafterlogin',
  scopes: ['user-read-private',
  'playlist-read',
  'playlist-read-private',
  'streaming',
  'user-top-read'],
  //tokenSwapURL,
  //tokenRefreshURL
};

class Login extends Component {
  state = {
    spotifyInitialized: false,
    loggedIn: false // better to have redux-level state management here and just check for token??
  };

  async componentDidMount() {
    console.log(this.state);
		if (!this.state.spotifyInitialized) {
			//initialize spotify
			Spotify.initialize(spotifyOptions, (loggedIn, error) => {
				if (error) console.log(error.message);
				//update UI state
				this.setState({ spotifyInitialized: true });
				//handle initialization
				if (loggedIn) {
					console.log('logged in!');
          // this.props.loginUserSuccess();
          // have to call login first before calling loginUserSuccess
          Actions.main();
				}
			});
		}
	}

  // start oauth process
  login() {
    Spotify.login((loggedIn, error) => {
      if (error) console.log(error);
      if (loggedIn) {
        // ** Check if user has required info already -  if not, take them to form page
        // ** If they do have required info - go to main page
        console.log('great success');
        Actions.main();
      }
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => this.login()}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { accessToken, expiresIn } = state.spotify;

  return { accessToken, expiresIn };
};

export default connect(mapStateToProps, { loginUserSuccess })(Login);
