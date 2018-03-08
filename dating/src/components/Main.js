import React, { Component } from 'react';
import { Image, Text, ScrollView, View } from 'react-native';
import Spotify from 'react-native-spotify';
import { Card, CardSection, Button } from './common';
import TrackList from './TrackList';

class Main extends Component {
  state = {
    name: '',
    token: '',
    imageURL: '',
    topTracks: []
  }

  async componentDidMount() {
    Spotify.getMe((res, error) => {
      if (res) {
        this.setState({ name: res.display_name, imageURL: res.images[0].url });
      }
      if (error) {
        console.log('something went wrong');
        console.log(error);
      }
    });
    this.checkAuth();
  }

  // not working atm
  async getTopArtists() {
    Spotify.sendRequest('v1/me/player/top/artists', 'GET', {}, false, (res, error) => {
      if (error) console.log(typeof error, error);
    });
  }

  // just for testing
  async getAlbum(id) {
    Spotify.getAlbum(id, {}, (res, err) => {
      console.log(res, err);
    });
  }

  // get users top 15 tracks
  async getTracks() {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=15', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`
      })
    });
    const json = await response.json();
    this.setState({ topTracks: json.items });
  }

  async checkAuth() {
    Spotify.getAuthAsync((res) => {
      this.setState({ token: res.accessToken });
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card>
          <CardSection>
            <Text>
              Welcome {this.state.name}!
            </Text>
          </CardSection>

          <CardSection
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: this.state.imageURL }}
            />
          </CardSection>

          <CardSection>
            <Button onPress={() => this.getTracks()}>
              Get Top Tracks
            </Button>
          </CardSection>


          <TrackList tracks={this.state.topTracks} />


        </Card>
      </View>
    );
  }
}

export default Main;
