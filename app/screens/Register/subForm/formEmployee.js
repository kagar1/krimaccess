import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../../styles';
import MyInput from '../../../components/input1';
import Button1 from '../../../components/button1';

export default function FormEmployee(props){
    return(
       <ScrollView>
        <View>
                <View style={styles.inputBlock}>
                    <Text style={styles.labelInput}>Email:</Text>
                    <MyInput placeholder = "Email or number"/>
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.labelInput}>Name:</Text>
                    <MyInput placeholder = "Your name"/>
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
       </ScrollView>
    )
}