import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const Track = (track) => {
  return (
    <CardSection style={{ flex: 1 }}>
      <Text>
        {track.track.name} - {track.track.artists[0].name}
      </Text>
    </CardSection>
  );
};

export default Track;
