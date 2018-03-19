import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Label, Input, Button } from 'native-base';
import { Card, CardSection} from './common';

import TrackList from './TrackList';
import ArtistList from './ArtistList';

import { 
  getNameAndImage,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
  updateName,
  updateAge,
  updateProperty,
  userPost
} from '../actions';

class UserInfoForm extends Component {
  
  componentDidMount() {
    this.props.getNameAndImage();
    this.props.getTokenAndExpiration();
    this.props.getUserLocation();
    this.props.userInfo();
    this.props.userPost()
    console.log('Prop user info',this.props)
  }
  
  componentWillUnmount(props) {
    this.props.userPost()
    //console.log('Component Will Receive Props',this.props.user)
  }
  
  render() {
    //console.log('this state ', this.state)
    return (

      <Form>
        <Item fixedLabel>
          <Label>Name</Label>
          <Input type='text' value={this.props.name} onChangeText={(value) => this.props.updateProperty(value)}></Input>
        </Item>
        <Item fixedLabel>
          <Label>age</Label>
          <Input type='text' value={this.props.age} onChangeText={(value) => this.props.updateProperty({prop:'age', value})}></Input>
        </Item>
        <Item fixedLabel>
          <Label>Description</Label>
          <Input type='text' value={this.props.description} onChangeText={(value) => this.props.updateProperty({prop:'description', value})}></Input>
        </Item>
        <Item fixedLabel>
          <Label>Gender</Label>
          <Input type='text' value={this.props.gender} onChangeText={(value) => this.props.updateProperty({prop:'gender', value})}></Input>
        </Item>
        <Item fixedLabel>
          <Label>Perfered Match Gender</Label>
          <Input type='text' value={this.props.desired_gender} onChangeText={(value) => this.props.updateProperty({prop:'desired_gender', value})}></Input>
        </Item>
        <Item fixedLabel>
          <Label>Age Range</Label>
          <Input type='text' value={this.props.age_range} onChangeText={(value) => this.props.updateProperty({prop:'age_range', value})}></Input>
        </Item>
        <Item fixedLabel>
          <Label>Radius</Label>
          <Input type='text' value={this.props.radius} onChangeText={(value) => this.props.updateProperty({prop:'radius', value})}></Input>
        </Item>
        <Button rounded success>
          <Text onPress={() => 
            {
              const { gender, description, desired_gender, age, age_range, radius, name, imageURL, spotifyID } = this.props
              const obj = {
              spotify_id: 1241242323412,
              name: name,
              age: age,
              gender: gender,
              photo: imageURL,
              description: description,
              desired_gender: desired_gender,
              radius: radius,
              age_range: age_range,
            }
            this.props.userPost(obj)}}>
            Success
          </Text>
        </Button>
      </Form>

    );
  }
}

const mapStateToProps = state => {
  const { name, imageURL, spotifyID, topTracks, topArtists } = state.spotify;
  const { gender, description, desired_gender, age, age_range, radius } = state.user;
  return { gender, description, desired_gender, age, age_range, radius, name, imageURL, spotifyID, topTracks, topArtists };

  
};

export default connect(mapStateToProps, { 
  getNameAndImage,
  getTokenAndExpiration,
  getMusicInfo,
  getUserLocation,
  userInfo,
  updateName,
  updateAge,
  updateProperty,
  userPost,
})(UserInfoForm);

