import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import Artist from './Artist';

class ArtistList extends Component {

  render() {
    const artists = this.props.artists;
    return (
      <ScrollView>
        {artists.map(artist => (<Artist
          key={artists.indexOf(artist)}
          artist={artist}
        />))}
      </ScrollView>
    );
  }
}

export default ArtistList;
