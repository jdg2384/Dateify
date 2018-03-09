import React, { Component } from 'react';
import { CardSection, Input } from './common';

class UserInfoForm extends Component {
  render() {
    return (
      <CardSection>
          <Input
            label="Age"
            keyboardType="numeric"
          />
        </CardSection>


    );
  }
}

export default UserInfoForm;
