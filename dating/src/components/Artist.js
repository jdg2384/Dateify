import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const Artist = (artist) => {
  return (
    <CardSection style={{ flex: 1 }}>
      <Text style={{ marginLeft: 5, fontFamily: 'HelveticaNeue-Light' }}>
        {artist.artist}
      </Text>
    </CardSection>
  );
};

export default Artist;
