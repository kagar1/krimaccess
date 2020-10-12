import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './app/screens/login/loginPage';
import RegisterPage from './app/screens/Register/registerPage';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNav from './app/config/navigation/StackNav';

const Stack = createStackNavigator();
export default function App() {
  return (
   
      
      <StackNav />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
