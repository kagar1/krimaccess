import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../../screens/login/loginPage";
import RegisterPage from "../../screens/Register/registerPage"; 

const Stack = createStackNavigator();

export default class StackNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer> 
          <Stack.Navigator>
              <Stack.Screen name = "Login" component={LoginPage} options={{headerShown:false}} />
              <Stack.Screen name="Register" component={RegisterPage} options={{headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
