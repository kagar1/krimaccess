import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import RegisterSub1 from './registerSub1';
import RegisterSub2 from './registerSub2';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //litlle function to navigate to Login Screen
  navigation = ()=>{
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
        <View  style ={styles.mainlogin}>
            <RegisterSub1 />
            <RegisterSub2 navigation={this.navigation}/>
        </View>
    );
  }
}
