import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { initializeSpotify, login } from '../actions';

class Login extends Component {
  componentDidMount() {
		if (!this.props.spotifyInitialized) {
      this.props.initializeSpotify();
		}
	}

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => this.props.login()}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { spotifyInitialized, loggedIn } = state.spotify;

  return { spotifyInitialized, loggedIn };
};

export default connect(mapStateToProps, { initializeSpotify, login })(Login);
