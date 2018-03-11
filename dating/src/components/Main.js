import React, { Component } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import Spotify from 'react-native-spotify';
import { Card, CardSection, Button } from './common';
import TrackList from './TrackList';
import ArtistList from './ArtistList';

class Main extends Component {
  // need to "redux-ify" all of this
  state = {
    name: '',
    token: '',
    imageURL: '',
    topTracks: [],
    topArtists: []
  }

  async componentDidMount() {
    Spotify.getMe((res, error) => {
      if (res) {
        console.log(res);
        this.setState({ name: res.display_name, imageURL: res.images[0].url });
      }
      if (error) {
        console.log('something went wrong');
        console.log(error);
      }
    });
    this.checkAuth();
  }


  // get users top 50 tracks
  async getTop(type) {
    const response = await fetch(`https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=long_term`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.token}`
      })
    });
    const json = await response.json();
    console.log(json);
    if (type === 'tracks') this.setState({ topTracks: json.items, topArtists: [] });
    if (type === 'artists') this.setState({ topArtists: json.items, topTracks: [] });
  }

  // sets users Auth token in state
  async checkAuth() {
    Spotify.getAuthAsync((res) => {
      console.log(res); // check token expire time - if it is less than __some amount__ from
      // current time --> use refresh token to request new one (following OAuth Encryption standards)
      this.setState({ token: res.accessToken });
    });
  }


  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card>
          <CardSection style={{ justifyContent: 'center' }}>
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
              style={{ width: 300, height: 300 }}
              source={{ uri: this.state.imageURL }}
            />
          </CardSection>

          <CardSection>
            <Button onPress={() => this.getTop('tracks')}>
              Get Top Tracks
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.getTop('artists')}>
              Get Top Artists
            </Button>
          </CardSection>

          <TrackList tracks={this.state.topTracks} />

          <ArtistList artists={this.state.topArtists} />

        </Card>
      </ScrollView>
    );
  }
}

export default Main;
