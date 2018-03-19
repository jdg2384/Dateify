import React from 'react';
import { Text, Image } from 'react-native';
import { CardSection, Card } from './common';
import img from '../assets/download.png';

const Match = (match) => {
  return (
    <Card>
      <CardSection style={{ flex: 1 }}>
        <Image
          style={{ width: 150, height: 150 }}
          source={img}
        />
        <Text>
          {match.match.name}
        </Text>
      </CardSection>
    </Card>
  );
};

export default Match;
