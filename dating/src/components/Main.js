import React, { Component } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Button } from './common';
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import {
  getNameImageId,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
 } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.getTokenAndExpiration();
    this.props.getNameImageId();
    this.props.getUserLocation();
    this.props.userInfo();
    // need to figure out how to chain this to the end of getToken so that
    // token has a value when I go to request music info
    // also check whether it (top music info) is already in database
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.accessToken !== nextProps.accessToken) {
      console.log('inside conditional');
      console.log('next >', nextProps.accessToken);
      this.props.getMusicInfo('artists', nextProps.accessToken);
      this.props.getMusicInfo('tracks', nextProps.accessToken);
    }
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

          <CardSection style={{ justifyContent: 'center' }}>
            <Text>
              Lat: {this.props.latitude}, Long: {this.props.longitude}
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


          <CardSection>
            <Button onPress={() => Actions.auth()}>
              Logout
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
  const { latitude, longitude, messages } = state.user;

  return { name, imageURL, accessToken, topTracks, topArtists, latitude, longitude, messages };
};

export default connect(mapStateToProps, {
  getNameImageId,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
})(Main);
