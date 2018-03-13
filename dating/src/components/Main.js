import React, { Component } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import { getNameAndImage, getTokenAndExpiration, getMusicInfo } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.getNameAndImage();
    this.props.getTokenAndExpiration();
    // if (this.props.accessToken) {
    //   console.log('inside conditional');
    //   this.props.getMusicInfo('artists', this.props.accessToken);
    // }
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
            <Button onPress={() => this.props.getMusicInfo('tracks', this.props.accessToken)}>
              Get Top Tracks
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.props.getMusicInfo('artists', this.props.accessToken)}>
              Get Top Artists
            </Button>
          </CardSection>

          <TrackList tracks={this.props.topTracks} />

          <ArtistList artists={this.props.topArtists} />

        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { name, imageURL, accessToken, topTracks, topArtists } = state.spotify;

  return { name, imageURL, accessToken, topTracks, topArtists };
};

export default connect(mapStateToProps, {
  getNameAndImage,
  getTokenAndExpiration,
  getMusicInfo,
})(Main);
