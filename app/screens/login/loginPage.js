import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginSub1 from './loginSub1';
import LoginSub2 from './loginSub2';
import styles from './styles'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View  style ={styles.mainlogin}>
        <LoginSub1 />
        <LoginSub2 />
      </View>
    );
  }
}
