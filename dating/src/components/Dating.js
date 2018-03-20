import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Container } from 'native-base';
import { Button, Card, CardSection } from './common';
import { goToNext } from '../actions';

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
  render() {
    return (
      <Container style={{ flex: 1, color: 'green' }}>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 50 }}>
            {users[this.props.currentIndex].name}
          </Text>
        </CardSection>

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
