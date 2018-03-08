import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const Artist = (artist) => {
  return (
    <CardSection style={{ flex: 1 }}>
      <Text>
        {artist.artist.name}
      </Text>
    </CardSection>
  );
};

export default Artist;
