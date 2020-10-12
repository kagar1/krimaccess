import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';
import MyInput from '../../../components/input1';
import Button1 from '../../../components/button1';

export default function FormEmployee(props){
    return(
       <View>
           <View style={styles.inputBlock}>
                <Text style={styles.labelInput}>Email:</Text>
                <MyInput placeholder = "Email or number"/>
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput} >PassWord:</Text>
                <MyInput placeholder="Password"/>
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput} >Company Code:</Text>
                <MyInput placeholder="Company Code"/>
            </View>
       </View> 
    )
}