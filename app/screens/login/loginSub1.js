import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './styles'

export default function LoginSub1(){
    return (
        <View style={styles.sub1Layout}>
            <Text style = {styles.sub1Title}>Welcome</Text>
            <Image  source={require('../../lib/images/logo1.png')} resizeMode = 'stretch'/>
        </View>
    )
}