import React, { Component } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
// import TrackList from './TrackList';
// import ArtistList from './ArtistList';
import { getNameAndImage, getTokenAndExpiration } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.getNameAndImage();
    this.props.getTokenAndExpiration();
    // this.checkAuth();
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


  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card>
          <CardSection style={{ justifyContent: 'center' }}>
            <Text>
              Welcome {this.props.name}!
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
              source={{ uri: this.props.imageURL }}
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
{/*
          <TrackList tracks={this.props.topTracks} />

          <ArtistList artists={this.props.topArtists} /> */}

        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { name, imageURL, accessToken, topTracks, topArtists } = state.spotify;

  return { name, imageURL, accessToken, topTracks, topArtists };
};

export default connect(mapStateToProps, { getNameAndImage, getTokenAndExpiration })(Main);
