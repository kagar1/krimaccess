import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style1 from './style1';
import { NavigationContainer } from '@react-navigation/native';


export default function Button1(props){
    
    return(
        <TouchableOpacity style={{...style1.button1, backgroundColor:props.backColor, borderColor:props.borderColor, borderWidth:2}} onPress={props.navigation}>
            <Text style={{...style1.buttonText, color:props.textColor}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

 