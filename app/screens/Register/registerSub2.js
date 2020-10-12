import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import MyInput from '../../components/input1';
import Button1 from '../../components/button1';
import * as Animatable from 'react-native-animatable'
import FormEmployee from './subForm/formEmployee';
import FormCompany from './subForm/formCompany';
import {Picker} from '@react-native-community/picker';


export default class RegisterSub2 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            account : "Employee",
            isEmployeeFormShow : true
        };

        
    }

    pickerChange = (val)=>{
        if(val == "Employee"){
            this.setState({account: val, isEmployeeFormShow: true})
        }else{
            this.setState({account: val, isEmployeeFormShow: false}) 
        }
    }

    render(){
        return(
            <Animatable.View style={styles.sub2Layout} animation="fadeInUp" duration={700} easing="linear">
                <View style={styles.blockTitle}>
                    <Text>One Step away to manage your Time </Text>
                </View>

                {/* Choice Picker */}
                <Picker
                    selectedValue = {this.state.account}
                    style={styles.picker}
                    onValueChange = {
                        (itemValue, itemIndex) => this.pickerChange(itemValue)
                    }
                >
                    <Picker.Item label="Employee" value="Employee" />
                    <Picker.Item label="Company" value="Company" />
                </Picker>
                
                {/* Show corresponding form base on Picker choice*/}
                {this.state.isEmployeeFormShow? <FormEmployee /> : <FormCompany />}


                {/* Buttons */}
                <View style={styles.inputBlock}>
                    <Button1 title="Sign Up" backColor = "#fab534" textColor ="white"/>
                </View>
                <View style={styles.inputBlock}>
                    <Button1 title="Sign In" backColor = "white" textColor ="#fab534" borderColor="#fab534" navigation={this.props.navigation}/>
                </View>
            </Animatable.View>
        )
    }
}