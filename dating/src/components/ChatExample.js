import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { joinRoom, sendMessage, fetchMessages } from '../actions';
import MessageList from './MessageList';

class Messages extends Component {
  state = {
    modalVisible: false,
    text: '',
  };

  componentDidMount() {
    this.props.joinRoom(this.props.matchId);
    this.props.fetchMessages(this.props.matchId);
    console.log('messages', this.props.messages);
    // this.props.sendMessage(null, this.props.matchId);
  }

  render() {
    // console.log(this.props.messages);
    return (
      <GiftedChat
        // text={this.state.text}
        // onInputTextChange={text => this.setState({ text })}
        messages={this.props.messages}
        onSend={() => this.props.sendMessage(this.state.text, this.props.matchId)}
      />
      // <View>
      //   <MessageList messages={this.props.messages} />
      //   <View style={{ marginTop: 400, justifyContent: 'flex-end' }}>
      //     <TextInput
      //     style={{
      //       height: 40,
      //       borderColor: 'blue',
      //       borderWidth: 1,
      //       margin: 5,
      //       backgroundColor: 'grey',
      //
      //     }}
      //     onChangeText={text => this.setState({ text })}
      //     value={this.state.text}
      //     />
      //     <Button
      //       onPress={() => {
      //         this.props.sendMessage(this.state.text, this.props.matchId);
      //         this.setState({ text: '' });
      //       }}
      //       title="send"
      //       color="red"
      //       accessibilityLabel="Learn more about this purple button"
      //     />
      //   </View>
      // </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.user.messages,
    matchId: state.user.matchId
  };
}
export default connect(mapStateToProps, {
  joinRoom,
  sendMessage,
  fetchMessages
})(Messages);
