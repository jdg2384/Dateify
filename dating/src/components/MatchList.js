import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Match from './Match';
import babe from '../assets/babe.png';
import girl from '../assets/girl.png';
import three from '../assets/3.png';
import glasses from '../assets/glasses.png'

const matches = [
  {
    id: 1,
    matchId: 1,
    CI: 74,
    img: babe,
    name: 'Greta'
  },
  {
    id: 2,
    matchId: 2,
    CI: 16,
    img: girl,
    name: 'Maya'
  },
  {
    id: 3,
    matchId: 3,
    img: three,
    CI: 91,
    name: 'Tara'
  },
  {
    id: 4,
    matchId: 4,
    img: glasses,
    CI: 43,
    name: 'Cleo'
  },
];

class MatchList extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#b8d8ad' }}>
        {matches.map(match => (<Match
          key={matches.indexOf(match)}
          match={match}
        />))}
      </ScrollView>
    );
  }
}

export default MatchList;
