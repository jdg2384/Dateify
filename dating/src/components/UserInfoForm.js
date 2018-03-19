import React, { Component } from 'react';
import { View, Image, Text, ScrollView, Picker, StyleSheet } from 'react-native';
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
  
  componentWillUnmount(props) {
    userPost()
  }
  
  render() {
    return (
      <Form style={styles.form}>
        <View style={styles.container}>
          <Image style={styles.titleStyle} source={{ uri: this.props.imageURL }}/>
        </View>
        <Item fixedLabel>
          <Label>Name</Label>
          <Input type='text' value={this.props.name} onChangeText={(value) => this.props.updateProperty(value)}></Input>
        </Item>
        <Item fixedLabel>
          <Label>age</Label>
          <Input type='text' value={this.props.age} onChangeText={(value) => this.props.updateProperty({prop:'age', value})}></Input>
        </Item>
        <Item fixedLabel>
          <Label style={styles.description}>Description</Label>
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
              const { gender, description, desired_gender, age, age_range, radius, name, imageURL, spotifyID, topTracks, topArtists } = this.props
              const obj = {
              spotify_id: 1241242323412, // Not Working 
              name: name,
              age: age,
              gender: gender,
              photo: imageURL,
              description: description,
              desired_gender: desired_gender,
              radius: radius,
              age_range: age_range,
              
              top_tracks: topTracks.reduce((prev,curr) =>{
                              let key = curr.name
                              prev[key] = `${key}`
                              return prev
                            },{}),
              top_artists:  topArtists.reduce((prev,curr) =>{
                              let key = curr.name
                              prev[key] = key
                              return prev
                            },{})
            }
            console.log(obj);
            this.props.userPost(obj)}}>
            Success
          </Text>
        </Button>
      </Form>

    );
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff', 
  },
  description: {
    height: 40,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
      margin:15,
      height:300,
      width:300,
      borderRadius: 300/2,
      borderWidth: 4,
      borderColor: "#51ba5e",
      justifyContent: 'center',
      alignItems: 'center'
  }
})

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

