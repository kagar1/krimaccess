import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles';
import * as Animatable from 'react-native-animatable'

export default function RegisterSub1(){
    return (
        <View style={styles.sub1Layout}>
            <Text style = {styles.sub1Title}>Welcome</Text>
            <Animatable.Image  source={require('../../lib/images/logo1.png')} resizeMode = 'stretch' animation="bounce" delay={700}/>
        </View>
    )
}