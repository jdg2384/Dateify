import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import Spotify from 'react-native-spotify';
import { Card, CardSection, Button } from './common';

class Main extends Component {
  state = {
    name: '',
    token: '',
    imageURL: ''
  }

  async componentDidMount() {
    Spotify.getMe((res, error) => {
      if (res) {
        console.log(res.images[0].url);
        this.setState({ name: res.display_name, imageURL: res.images[0].url });
      }
      if (error) {
        console.log('something went wrong');
        console.log(error);
      }
    });
    this.checkAuth();
    console.log(this.state.token);
  }

  // not working atm
  async getTopArtists() {
    Spotify.sendRequest('v1/me/player/top/artists', 'GET', {}, false, (res, error) => {
      if (error) console.log(typeof error, error);
    });
  }

  async getAlbum(id) {
    Spotify.getAlbum(id, {}, (res, err) => {
      console.log(res, err);
    });
  }

  // get users top 10 tracks
  async getTracks() {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`
      })
    });
    const json = await response.json();
    console.log(json);
  }

  async checkAuth() {
    Spotify.getAuthAsync((res) => {
      this.setState({ token: res.accessToken });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>
            Welcome {this.state.name}!
          </Text>
        </CardSection>

        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: this.state.imageURL }}
        />

        <CardSection>
          {/* <Button onPress={() => this.getAlbum('5f6Eu9QtujgGggq5qbbycV')}> */}
          <Button onPress={() => this.checkAuth()}>
            Press
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.getTracks()}>
            Get Top Tracks
          </Button>
        </CardSection>


      </Card>
    );
  }
}

export default Main;
