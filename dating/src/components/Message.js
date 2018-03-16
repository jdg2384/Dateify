import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const Message = (message) => {
  return (
    <CardSection style={{ flex: 1 }}>
      <Text>
        {message.message}
      </Text>
    </CardSection>
  );
};

export default Message;
