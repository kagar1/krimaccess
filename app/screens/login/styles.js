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
        fontSize: 25,
        fontWeight: 'bold'
    },
    mainlogin:{
        flex: 1,
        backgroundColor:'#fab534',
    },

    //sub2 styles of our login page
    sub2Layout : {
        flex: 3,
        backgroundColor:'white',
        alignItems:'center',
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        paddingTop: 10,
    },

})

export default styles;