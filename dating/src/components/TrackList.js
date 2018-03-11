import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import Track from './Track';

class TrackList extends Component {

  render() {
    const tracks = this.props.tracks;
    return (
      <ScrollView>
        {tracks.map(track => (<Track
          key={tracks.indexOf(track)}
          track={track}
        />))}
      </ScrollView>
    );
  }
}

export default TrackList;
