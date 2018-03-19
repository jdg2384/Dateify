import React, { Component } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Button } from './common';
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import {
  getNameAndImage,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
 } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.getNameAndImage();
    this.props.getTokenAndExpiration();
    this.props.getUserLocation();
    this.props.userInfo();
    // need to figure out how to chain this to the end of getToken so that
    // token has a value when I go to request music info
    // also check whether it (top music info) is already in database

    // if (this.props.accessToken) {
    //   console.log('inside conditional');
    //   this.props.getMusicInfo('artists', this.props.accessToken);
    // }
  }

  render() {
    console.log('Main.js',this.props.topTracks)
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
  const { latitude, longitude } = state.user;

  return { name, imageURL, accessToken, topTracks, topArtists, latitude, longitude };
};

export default connect(mapStateToProps, {
  getNameAndImage,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
})(Main);
