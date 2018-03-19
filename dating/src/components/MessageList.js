import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import Message from './Message';

class MessageList extends Component {
  render() {
    const messages = this.props.messages;
    return (
      <ScrollView>
        {messages.map(message => (<Message
          key={messages.indexOf(message)}
          message={message}
        />))}
      </ScrollView>
    );
  }
}

export default MessageList;
