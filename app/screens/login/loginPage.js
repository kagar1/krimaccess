import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginSub1 from './loginSub1';
import LoginSub2 from './loginSub2';
import styles from '../styles'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }

  // little function to navigate to Register Screen
  navigation = ()=>{
   this.props.navigation.navigate('Register');
  }

  //another little navigation 
  moving = ()=>{
    this.props.navigation.navigate("Employee"); 
  }

  //another little navigation 
  move = ()=>{
    this.props.navigation.navigate("Home"); 
  }

  render() {
    return (
      <View  style ={styles.mainlogin}>
        <LoginSub1 />
        <LoginSub2 navigation={this.navigation}  moving = {this.moving}  move={this.move} /> 
      </View>
    );
  }
}
