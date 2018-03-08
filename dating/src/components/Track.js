import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const Track = (track) => {
  return (
    <CardSection style={{ flex: 1 }}>
      <Text>
        {track.track.name}
      </Text>
    </CardSection>
  );
};

export default Track;
