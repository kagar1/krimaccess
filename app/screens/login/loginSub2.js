import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import MyInput from '../../components/input1';
import Button1 from '../../components/button1';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import fire from '../../config/navigation/firebase/firebaseConnexion'


export default function LoginSub2(props){

    //employee fields state
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    

    function loginAction(){
        if(email == "" || Password ==""){
            alert("please make sure to fill");
        }else{
            auth().signInWithEmailAndPassword(email, Password).then((response)=>{

                const userId = response.user.uid;

                //we check if it is Employee or Company Account 
                fire.firestore().collection("Company").where("id", "==", userId).get().then( snap => {
                    if(snap.empty){
                        
                        props.moving();
                    }else{
                        alert(" company ");
                        props.move()
                    }
                })
                

            }).catch((error)=> alert(error))
        }
    }
    
    return(
        <Animatable.View style={styles.sub2Layout} animation="fadeInUp" duration={700} easing="ease-in">
            <View style={styles.blockTitle}>
                <Text>One Step away to manage your Time </Text>
            </View>
            
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput}>Email:</Text>
                <MyInput placeholder = "Email or number" value={email} onchange={setEmail} />
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput} >PassWord:</Text>
                <MyInput placeholder="Password" value={Password}  onchange= {setPassword}/>
            </View>

            <View style={styles.inputBlock}>
                <Button1 title="Sign In" backColor = "#fab534" textColor ="white" navigation={loginAction}/>
            </View>
            <View style={styles.inputBlock}>
                <Button1 title="Sign Up" backColor = "white" textColor ="#fab534" borderColor="#fab534" navigation = {props.navigation}/>
            </View>
        </Animatable.View>
    )
}