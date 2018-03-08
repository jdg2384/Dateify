import React, { Component } from 'react';
import Spotify from 'react-native-spotify';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';


const spotifyOptions = {
  clientID: 'f4a3b66de8d54f50bb290003986af099',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'spotifydating://returnafterlogin',
  scopes: ['user-read-private',
  'playlist-read',
  'playlist-read-private',
  'streaming',
  'user-top-read'],
};

class Login extends Component {
  state = {
    spotifyInitialized: false
  };

  async componentDidMount() {
    console.log(this.state);
		if (!this.state.spotifyInitialized) {
			//initialize spotify
			Spotify.initialize(spotifyOptions, (loggedIn, error) => {
				if (error != null) {
					console.log(error.message);
				}
				//update UI state
				this.setState({ spotifyInitialized: true });
				//handle initialization
				if (loggedIn) {
					console.log('logged in!');
          Actions.main();
				}
			});
		} //else {
			//update UI state
			// this.setState({ spotifyInitialized: true });
			//handle logged in
		// 	if (Spotify.isLoggedIn()) {
		// 		console.log('logged in!!');
		// 	}
		// }
	}

    login() {
      Spotify.login((loggedIn, error) => {
        if (error) console.log(error);
        if (loggedIn) {
          console.log('success');
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

export default Login;
