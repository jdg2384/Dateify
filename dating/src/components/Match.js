import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';
import img from '../assets/download.png';
import { setChatId, sendMessage } from '../actions';

class Match extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          if (this.props.match.matchId == 1) Actions.greta();
          if (this.props.match.matchId == 3) Actions.tara();
          // this.props.setChatId(this.props.match.matchId);
          // Actions.chatEx();
        }}
      >
        <Card>
          <CardSection
            style={{ flex: 1,
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: '#f4ffef' }}
          >
            <Image
              style={{ width: 75, height: 75 }}
              source={this.props.match.img}
            />
            <View style={{ flexDirection: 'column' }}>

              <Text style={{ fontSize: 30, paddingLeft: 30, fontFamily: 'HelveticaNeue-Light' }}>
                {this.props.match.name}
              </Text>
              <Text style={{ fontSize: 14, paddingLeft: 30, fontFamily: 'HelveticaNeue-Light' }}>
                Compatibility Index: {this.props.match.CI}%
              </Text>
            </View>

          </CardSection>

        </Card>
      </TouchableOpacity>
    );
  }
}


function mapStateToProps(state) {
  return {
    messages: state.user.messages,
  };
}
export default connect(mapStateToProps, {
  setChatId,
  sendMessage
})(Match);
