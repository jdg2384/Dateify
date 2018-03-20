import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import { Card, CardSection } from './common';

const tracks = [
  { name: 'Me and Julio Down by the Schoolyard', artist: 'Paul Simon' },
  { name: 'Dink\'s Song', artist: 'Oscar Isaac' },
  { name: 'Wolf', artist: 'First Aid Kit' },
  { name: 'Dancing in The Moonlight', artist: 'King Harvest' },
  { name: 'Tesselate', artist: 'alt-J' },
  { name: 'Kathy\'s Song', artist: 'Simon & Garfunkel' },
  { name: 'Clair de Lune', artist: 'Claude Debussy' },
  { name: 'Sick In The Head', artist: 'The Lumineers' },
  { name: 'Boots of Spanish Leather', artist: 'Bob Dylan' },
  { name: 'Heartbeats', artist: 'José Gonzalez' },
];

const artists = [
  'Bob Dylan',
  'Van Morrison',
  'ODESZA',
  'Paul Simon',
  'Grateful Dead',
  'Roy Orbison',
  'Radiohead',
  'Leonard Cohen',
  'Simon & Garfunkel',
  'The Tallest Man on Earth'
];

class GretaMusic extends Component {
  render() {
    return (
      <ScrollView>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontFamily: 'HelveticaNeue-Light' }}>
            Greta's Top 10 Tracks
          </Text>
        </CardSection>
        <TrackList tracks={tracks} />
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontFamily: 'HelveticaNeue-Light' }}>
            Greta's Top 10 Artists
          </Text>
        </CardSection>
        <ArtistList artists={artists} />
      </ScrollView>
    );
  }
}

export default GretaMusic;
