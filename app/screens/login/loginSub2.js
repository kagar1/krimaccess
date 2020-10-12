import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import MyInput from '../../components/input1';
import Button1 from '../../components/button1';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginSub2(props){
    
    return(
        <Animatable.View style={styles.sub2Layout} animation="fadeInUp" duration={700} easing="ease-in">
            <View style={styles.blockTitle}>
                <Text>One Step away to manage your Time </Text>
            </View>
            
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput}>Email:</Text>
                <MyInput placeholder = "Email or number"/>
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput} >PassWord:</Text>
                <MyInput placeholder="Password"/>
            </View>

            <View style={styles.inputBlock}>
                <Button1 title="Sign In" backColor = "#fab534" textColor ="white"/>
            </View>
            <View style={styles.inputBlock}>
                <Button1 title="Sign Up" backColor = "white" textColor ="#fab534" borderColor="#fab534" navigation = {props.navigation}/>
            </View>
        </Animatable.View>
    )
}