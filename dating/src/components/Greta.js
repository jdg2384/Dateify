import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';

class Greta extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 10,
          text: 'I\'d love to go to a concert with you! I\'m going to see this band called Rainbow Kitten Surprise play next week. If you like alt-J you\'ll like them for sure.',
          // createdAt: new Date(),
          user: {
            _id: 1,
          },
        },
        {
          _id: 9,
          text: 'I went to Vanderbilt. Then I moved to New York City for a while. I just moved here a couple months ago. I\'m looking for some friends to go to concerts with!',
          // createdAt: new Date(),
          user: {
            _id: 2,
          },
        },
        {
          _id: 8,
          text: 'Oh that\'s great. Where did you go to college?',
          // createdAt: new Date(),
          user: {
            _id: 1,
          },
        },
        {
          _id: 7,
          text: 'Nice! That\'s super cool. I discovered him in college. My roommate was a huge fan.',
          // createdAt: new Date(),
          user: {
            _id: 2,
          },
        },
        {
          _id: 6,
          text: 'Yea he\'s the best. My parents always used to play his music when I was growing up. So I love him.',
          // createdAt: new Date(),
          user: {
            _id: 1,
          },
        },
        {
          _id: 5,
          text: 'I take it you like him too?',
          // createdAt: new Date(),
          user: {
            _id: 2,
          },
        },
        {
          _id: 4,
          text: 'Thanks!! :)',
          // createdAt: new Date(),
          user: {
            _id: 2,
          },
        },
        {
          _id: 3,
          text: 'I love that you like Paul Simon',
          // createdAt: new Date(),
          user: {
            _id: 1,
          },
        },
        {
          _id: 2,
          text: 'Hi!',
          // createdAt: new Date(),
          user: {
            _id: 1,
          },
        },
        {
          _id: 1,
          text: 'Hi there :)',
          // createdAt: new Date(),
          user: {
            _id: 2,
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

export default Greta;
