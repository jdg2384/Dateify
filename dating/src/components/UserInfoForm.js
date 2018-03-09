import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { updateProperty, updateAge } from '../actions';

// need to add sections for:
// description
// age range
// radius
// desired gender

class UserInfoForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Age"
            keyboardType="numeric" // numeric keyboard isnt working on simulator for whatever reason
            placeholder="i.e. 25"
            value={this.props.age}
            onChangeText={value => this.props.updateAge(value)}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text>Gender</Text>
          <Picker
            selectedValue={this.props.gender}
            value={this.props.gender}
            onValueChange={value => this.props.updateProperty({ prop: 'gender', value })}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Upload Photos</Button>
        </CardSection>

        <CardSection>
          <Button>Submit</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { age, gender } = state.formInfo;

  return { age, gender };
};

export default connect(mapStateToProps, { updateProperty, updateAge })(UserInfoForm);
