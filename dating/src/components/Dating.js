import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { Icon, Container } from 'native-base';
import { Button, Card, CardSection } from './common';
import {
  goToNext,
  getTokenAndExpiration,
  getNameImageId,
  getUserLocation,
  userInfo,
} from '../actions';
import Logo from '../assets/logo4.png';

const users = [
  { name: 'Kalina' },
  { name: 'Kelly' },
  { name: 'Jenna' },
  { name: 'Brittany' },
  { name: 'Alexandra' },
  { name: 'Gertrude' },
  { name: 'Becky' },
  { name: 'Becca' },
  { name: 'Bella' },
];

class Dating extends Component {
  componentDidMount() {
    this.props.getTokenAndExpiration();
    this.props.getNameImageId();
    this.props.getUserLocation();
    this.props.userInfo();
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.accessToken !== nextProps.accessToken) {
      this.props.getMusicInfo('artists', nextProps.accessToken);
      this.props.getMusicInfo('tracks', nextProps.accessToken);
    }
    if (nextProps.currentIndex === 3) this._showModal();
    if (this.props.matches !== nextProps.matches) this.setState({ hasReceivedMatches: true })

  }

  state = {
    isModalVisible: false,
    hasReceivedMatches: false,
  };

   _hideModal = () => this.setState({ isModalVisible: false });

   _showModal = () => this.setState({ isModalVisible: true });

  render() {
    // console.log(this.props.matches[0]);

    const person = this.state.hasReceivedMatches ?
      <Card>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, textAlign: 'center' }}>
            {this.props.matches[this.props.currentIndex].name}
          </Text>

        </CardSection>
        <CardSection style={{ justifyContent: 'center' }}>
          <Image style={{ height: 200, width: 200 }} source={{ uri: this.props.matches[this.props.currentIndex].photo }} />
        </CardSection>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text>
            {this.props.matches[this.props.currentIndex].age}
          </Text>
        </CardSection>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text>
            {this.props.matches[this.props.currentIndex].description}
          </Text>
        </CardSection>
      </Card> : null;

    return (
      <Container style={{ flex: 1, color: 'green' }}>

        {person}


        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this._hideModal()}>
         <View
           style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          height: 350,
          width: 250,
          backgroundColor: '#f4ffef',
          }}
         >
           <Text style={{ fontFamily: 'HelveticaNeue-Light', fontSize: 30 }}>It's A Match!!</Text>
           <Image source={Logo} style={{ height: 100, width: 160, marginTop: 20 }} />
         </View>
       </Modal>

        <CardSection style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.props.goToNext(this.props.currentIndex)}>
            <Icon name='ios-thumbs-down' style={{ fontSize: 50, color: 'green' }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.goToNext(this.props.currentIndex)}>
            <Icon name='ios-thumbs-up' style={{ fontSize: 50, color: 'green', marginLeft: 100 }}/>
          </TouchableOpacity>
        </CardSection>
      </Container>

    );
  }
}

const mapStateToProps = state => {
  return {
    currentIndex: state.user.currentIndex,
    matches: state.user.matches
  };
};

export default connect(mapStateToProps, {
  goToNext,
  getTokenAndExpiration,
  getNameImageId,
  getUserLocation,
  userInfo,
})(Dating);
