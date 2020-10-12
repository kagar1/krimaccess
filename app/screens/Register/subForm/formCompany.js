import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';
import MyInput from '../../../components/input1';
import Button1 from '../../../components/button1';

export default function FormCompany(props){
    return(
       <View>
           <View style={styles.inputBlock}>
                <Text style={styles.labelInput}>Company Name:</Text>
                <MyInput placeholder = "Company Name"/>
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput} >Company email </Text>
                <MyInput placeholder="company email or phone"/>
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput} >Password:</Text>
                <MyInput placeholder="Password"/>
            </View>
       </View> 
    )
}