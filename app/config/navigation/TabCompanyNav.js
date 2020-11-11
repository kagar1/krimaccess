import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../../screens/CompanyScreen/Dashboard';
import Employee from '../../screens/CompanyScreen/Employee';
import Payment from '../../screens/CompanyScreen/Payment'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
const Tab = createBottomTabNavigator();

export default class TabCompanyNav extends Component{

    render(){
        return(
            <Tab.Navigator 
                initialRouteName="Dashboard" 
                tabBarOptions={{
                    activeTintColor: "#fab534"
                }} >
                <Tab.Screen name="Dashboard" component={Dashboard} 
                    options = {{
                        tabBarLabel: "Dashboard",
                        tabBarIcon: ({ color, size }) =>(
                            <MaterialCommunityIcons name="av-timer" color={color} size={size}  />
                        )
                    }}
                    
                />

                <Tab.Screen name="Payment" component={Payment} 
                    options = {{
                        tabBarLabel: "Payment",
                        tabBarIcon: ({ color, size }) =>(
                            <MaterialCommunityIcons name="cash-multiple" color={color} size={size}  />
                        )
                    }}
                    
                />

                <Tab.Screen name="Employee" component={Employee} 
                    options = {{
                        tabBarLabel: "Employee",
                        tabBarIcon: ({ color, size }) =>(
                            <MaterialCommunityIcons name="account-group" color={color} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
}

