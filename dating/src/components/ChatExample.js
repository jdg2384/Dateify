import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { joinRoom, sendMessage } from '../actions';
import MessageList from './MessageList';

class Messages extends Component {
  state = {
    modalVisible: false,
    text: ''
  };

  componentDidMount() {
    this.props.joinRoom();
  }

  render() {
    return (
      <View>
        <MessageList messages={this.props.messages} />
        <View style={{ marginTop: 450, justifyContent: 'flex-end' }}>
          <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            margin: 5,
            backgroundColor: 'grey',

          }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          />
          <Button
            onPress={() => {
              this.props.sendMessage(this.state.text);
              this.setState({ text: '' });
            }}
            title="send"
            color="red"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    messages: state.user.messages,
  };
}
export default connect(mapStateToProps, {
  joinRoom,
  sendMessage
})(Messages);
