import React, { Component, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../styles';
import auth from '@react-native-firebase/auth';
import MyInput from '../../components/input1';
import Button1 from '../../components/button1';
import * as Animatable from 'react-native-animatable'
import FormEmployee from './subForm/formEmployee';
import FormCompany from './subForm/formCompany';
import {Picker} from '@react-native-community/picker';
import fire from '../../config/navigation/firebase/firebaseConnexion'


export default function RegisterSub2 (props){

    // control
    const [account, setAccount] = useState("Employee");
    const [isEmployeeFormShow, setIsEmployeeFormShow] = useState(true);

    //employee fields state
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [companyCode, setCompanyCode] = useState("");

    // Company fields state
    const [companyName,  setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPassWord, setCompanyPassWord] = useState("");

    function pickerChange(val){
        if(val == "Employee"){
            setAccount(val);
            setIsEmployeeFormShow(true)
        }else{
            setAccount(val);
            setIsEmployeeFormShow(false)
        }
    }

    

    
    // function which is calling when a user is creating an account 
    function registerAction () {
        if(account == "Employee"){
            alert(" we're trying to register an employee");
        }else{
            if( companyName =="" || companyPassWord =="" || companyEmail=="" ){
                alert("Have you forget to fill one field ?")
            }else{
                alert(" creating a new company ");
                auth().createUserWithEmailAndPassword(companyEmail, companyPassWord).then((response) =>{
                  const id = response.user.uid;

                  alert(id);
                  const data = {
                      id: id,
                      companyName: companyName,
                      companyEmail: companyEmail
                  };
                    

                  fire.firestore().collection('Company').add(data).then(()=>{
                      alert("Company create ");
                  })
                  .catch((error) => {
                      alert(error);
                  })
                }).catch(error =>{
                    alert(error);
                })
            }
        }
    }

    
        return(
            <Animatable.View style={styles.sub2Layout} animation="fadeInUp" duration={700} easing="linear">
                <View style={styles.blockTitle}>
                    <Text>One Step away to manage your Time </Text>
                </View>

                {/* Choice Picker */}
                <Picker
                    selectedValue = {account}
                    style={styles.picker}
                    onValueChange = {
                        (itemValue, itemIndex) => pickerChange(itemValue)
                    }
                >
                    <Picker.Item label="Employee" value="Employee" />
                    <Picker.Item label="Company" value="Company" />
                </Picker>
                
                {/* Show corresponding form base on Picker choice*/}
                {isEmployeeFormShow ? 
                    <ScrollView>
                        <View>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.labelInput}>Email: </Text>
                                    <MyInput placeholder = "Email or number" value = {email}  onchange ={setEmail} />
                                </View>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.labelInput}>Name:</Text>
                                    <MyInput placeholder = "Your name" value = {name} onchange = {setName}/>
                                </View>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.labelInput} >PassWord:</Text>
                                    <MyInput placeholder="Password" value = {Password} onchange = {setPassword}/>
                                </View>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.labelInput} >Company Code:</Text>
                                    <MyInput placeholder="Company Code" value={companyCode} onchange = {setCompanyCode}/>
                                </View>
                        </View> 
                    </ScrollView> : 
                    <View>
                        <View style={styles.inputBlock}>
                                <Text style={styles.labelInput}>Company Name:</Text>
                                <MyInput placeholder = "Company Name" value={companyName} onchange={setCompanyName}/>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.labelInput} >Company email </Text>
                                <MyInput placeholder="company email or phone" value={companyEmail} onchange={setCompanyEmail}/>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.labelInput} >Password:</Text>
                                <MyInput placeholder="Password" value={companyPassWord} onchange={setCompanyPassWord}/>
                            </View>
                    </View>}


                {/* Buttons */}
                <View style={styles.inputBlock}>
                    <Button1 title="Sign Up" backColor = "#fab534" textColor ="white" navigation={registerAction}/>
                </View>
                <View style={styles.inputBlock}>
                    <Button1 title="Sign In" backColor = "white" textColor ="#fab534" borderColor="#fab534" navigation={props.navigation}/>
                </View>
            </Animatable.View>
        )
    
}