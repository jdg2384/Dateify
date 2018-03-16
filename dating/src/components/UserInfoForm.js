import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Label, Input, Button } from 'native-base';
import { Card, CardSection} from './common';
import { 
  getNameAndImage,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
  updateName,
  updateAge,
  updateProperty
} from '../actions';

// need to add sections for:
// description
// age range
// radius
// desired gender

class UserInfoForm extends Component {
  
  componentDidMount() {
    //this.props.getNameAndImage();
    this.props.getTokenAndExpiration();
    this.props.getUserLocation();
    this.props.userInfo();

    // need to figure out how to chain this to the end of getToken so that
    // token has a value when I go to request music info
    // also check whether it (top music info) is already in database

    // if (this.props.accessToken) {
    //   console.log('inside conditional');
    //   this.props.getMusicInfo('artists', this.props.accessToken);
    // }
    console.log(this.props)
  }
  // gender, age, age_range, radius
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name:'',
  //     age: null,
  //     gender: '',
  //     age_range: null,
  //     desired_gender: '',
  //     radius: null,
  //   };
  // } 
  render() {
    console.log('this props user info ', this.state)
    return (
      <Form>
        <Item fixedLabel>
          <Label>Name</Label>
          <Input type='text' value={this.props.name} onChangeText={(value) => this.props.updateName(value)}></Input>
        </Item>
        <Item fixedLabel>
          <Label>age</Label>
          <Input type='text' value={this.props.age} onChangeText={(value) => this.props.updateProperty({prop:'age', value})}></Input>
        </Item>
        <Item fixedLabel>
          <Label>Description</Label>
          <Input></Input>
        </Item>
        <Item fixedLabel>
          <Label>Gender</Label>
          <Input></Input>
        </Item>
        <Item fixedLabel>
          <Label>Perfered Match Gender</Label>
          <Input></Input>
        </Item>
        <Item fixedLabel>
          <Label>Age Range</Label>
          <Input></Input>
        </Item>
        <Item fixedLabel>
          <Label>Radius</Label>
          <Input></Input>
        </Item>
        <Button rounded success>
          <Text>Success</Text>
        </Button>
      </Form>
      
      // <Card>
      //   <CardSection>
      //     <Input
      //       label="Age"
      //       keyboardType="numeric" // numeric keyboard isnt working on simulator for whatever reason
      //       placeholder="i.e. 25"
      //       value={this.props.age}
      //       onChangeText={value => this.props.updateAge(value)}
      //     />
      //   </CardSection>

      //   <CardSection style={{ flexDirection: 'column' }}>
      //     <Text>Gender</Text>
      //     <Picker
      //       selectedValue={this.props.gender}
      //       value={this.props.gender}
      //       onValueChange={value => this.props.updateProperty({ prop: 'gender', value })}
      //     >
      //       <Picker.Item label="Male" value="male" />
      //       <Picker.Item label="Female" value="female" />
      //     </Picker>
      //   </CardSection>

      //   <CardSection>
      //     <Button>Upload Photos</Button>
      //   </CardSection>

      //   <CardSection>
      //     <Button>Submit</Button>
      //   </CardSection>
      // </Card>
    );
  }
}

const mapStateToProps = state => {
  const { gender, age, age_range, radius } = state.user;
  const { name } = state.spotify
  return { gender, age, age_range, radius, name };
};

export default connect(mapStateToProps, { 
  getNameAndImage,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
  updateName,
  updateAge,
  updateProperty
})(UserInfoForm);
