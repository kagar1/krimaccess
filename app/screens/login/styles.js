import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    //sub1 styles of our login page
    sub1Layout : {
        flex: 1,
        backgroundColor:'#fab534',
        alignItems:'center',
        paddingTop: 10,
    },
    sub1Title:{
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold'
    },
    sub1Logo:{
        height: 200,
        width: 200
    },
    mainlogin:{
        flex: 1,
        backgroundColor:'#fab534',
    },

    //sub2 styles of our login page
    sub2Layout : {
        flex: 3,
        backgroundColor:'white',
        padding : 25,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        paddingTop: 10,
    },

    labelInput:{
        fontWeight: 'bold',
        color: 'black' 
    },
    
    inputBlock:{
        marginTop: 30,
    },
    blockTitle:{
        alignItems: 'center'
    }

})

export default styles;