import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Match from './Match';

const matches = [
  {
    id: 1,
    name: 'Greta'
  },
  {
    id: 2,
    name: 'Gertrude'
  },
  {
    id: 3,
    name: 'Gretchen'
  },
  {
    id: 4,
    name: 'Gresmerelda'
  },
];

class MatchList extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <ScrollView>
        {matches.map(match => (<Match
          key={matches.indexOf(match)}
          match={match}
        />))}
      </ScrollView>
    );
  }
}

export default MatchList;
