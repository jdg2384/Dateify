import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';

class Tara extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hey how\'s it going?',
          // createdAt: new Date(),
          user: {
            _id: 1,
          },
        },

      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default Tara;
