import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { Icon, Container } from 'native-base';
import { Button, Card, CardSection } from './common';
import { goToNext } from '../actions';
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
  state = {
    isModalVisible: false
  };

   _hideModal = () => this.setState({ isModalVisible: false });

   _showModal = () => this.setState({ isModalVisible: true });

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentIndex === 3) this._showModal();
  }

  render() {
    return (
      <Container style={{ flex: 1, color: 'green' }}>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 50 }}>
            {users[this.props.currentIndex].name}
          </Text>
        </CardSection>

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
    currentIndex: state.user.currentIndex
  };
};

export default connect(mapStateToProps, {
  goToNext,
})(Dating);
