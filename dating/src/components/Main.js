import React, { Component } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Button } from './common';

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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.accessToken !== nextProps.accessToken) {
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
            <Button onPress={() => Actions.dating()}>
              Dating
            </Button>
          </CardSection>

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
