import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Timer from '../../screens/Employee/Timer';
import Listing from '../../screens/Employee/Listing';
import Account from '../../screens/Employee/Account';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();
export default class TabEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName = "Timer"
        tabBarOptions={{
            activeTintColor: "#fab534"
        }}
      >
          <Tab.Screen name="Timer" component={Timer}
            options={{
                tabBarLabel: "Timer",
                tabBarIcon: ({color, size}) =>(
                    <MaterialCommunityIcons name="timer" color={color} size={size} />
                )

            }}
          />

          <Tab.Screen name="Listing" component={Listing}
            options={{
                tabBarLabel: "Listing",
                tabBarIcon: ({color, size}) =>(
                    <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={size} />
                )

            }}
          />

          <Tab.Screen name="Account" component={Account}
            options={{
                tabBarLabel: "Account",
                tabBarIcon: ({color, size}) =>(
                    <MaterialCommunityIcons name="account-outline" color={color} size={size} />
                )

            }}
          />


      </Tab.Navigator>
    );
  }
}
