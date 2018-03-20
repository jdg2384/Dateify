import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const Track = (track) => {
  console.log(track);
  return (
    <CardSection style={{ flex: 1 }}>
      <Text style={{ marginLeft: 5, fontFamily: 'HelveticaNeue-Light' }}>
        {track.track.name} - {track.track.artist}
      </Text>
    </CardSection>
  );
};

export default Track;
