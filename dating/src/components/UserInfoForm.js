import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, Text, Picker , Slider} from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Label, Input, Button,} from 'native-base';
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
  state = {
    language: "",
    age: 21,
  }
  getVal(val){
    console.warn(val);
    }    
  render() {
    return (
      <ScrollView >
      <Form style={styles.form}>
        <View style={styles.container}>
          <Image style={styles.titleStyle} source={{ uri: this.props.imageURL }}/>
        </View>
        <Item fixedLabel style={styles.margin}>
          <Label style={styles.marginLabel}>Name</Label>
          <Input type='text' value={this.props.name} onChangeText={(value) => this.props.updateProperty(value)}></Input>
        </Item>
        <Item fixedLabel style={styles.margin}>
          <Label style={styles.marginLabel}>age</Label>
          <Input type='text' value={this.props.age} onChangeText={(value) => this.props.updateProperty({prop:'age', value})}></Input>
        </Item>
        <Item fixedLabel style={styles.margin}>
          <Label style={styles.descriptionLabel}>Description</Label>
          <Input style={styles.description} type='text' value={this.props.description} onChangeText={(value) => this.props.updateProperty({prop:'description', value})}></Input>
        </Item>
        <Label style={styles.genderMatch}>Gender Match</Label>
        <Picker
        style={styles.marginPicker}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Male" value="Male" />
        </Picker>
        <View style={styles.containerTwo}>
        <Label style={styles.margin}>Age Range</Label>
        <Text style={styles.welcome}>
          {this.state.age}
        </Text>  
        <Slider
        style={styles.slider}
         style={{ width: 300 }}
         step={1}
         minimumValue={18}
         maximumValue={71}
         value={this.state.age}
         onValueChange={val => this.setState({ age: val })}
         onSlidingComplete={ val => this.getVal(val)}
        />
      </View>
                 
        {/* <Item fixedLabel>
          <Label>Age Range</Label>
          <Input type='text' value={this.props.age_range} onChangeText={(value) => this.props.updateProperty({prop:'age_range', value})}></Input>
        </Item> */}
        <View style={styles.container}>
        <Button style={styles.button}>
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
            Submit
          </Text>
        </Button>
        </View>
      </Form>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    paddingLeft: -10, 
  },
  description: {
    height: 100,
  },
  descriptionLabel:{
    marginTop: -50,
    marginLeft: 15,
  },
  genderMatch:{
    color:'#585858',
    marginLeft: 14,
    marginTop: 14,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
      marginTop:15,
      height:300,
      width:300,
      borderRadius: 300/2,
      borderWidth: 4,
      borderColor: "#51ba5e",
      justifyContent: 'center',
      alignItems: 'center'
  },
  containerTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 25,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  margin: {
    marginLeft:0,
  },
  marginLabel:{
    marginLeft:15,
  },
  marginPicker: {
    textAlign: 'left',
  },
  button: {
    marginLeft:140,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#51ba5e",
    padding:20,
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

