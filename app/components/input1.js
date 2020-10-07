import React from 'react';
import {View, TextInput} from 'react-native';
import style1 from './style1';

const MyInput  = (props)=>{

    return (
        <TextInput style={style1.input1} placeholder={props.placeholder}/>
    )
}

export default MyInput;