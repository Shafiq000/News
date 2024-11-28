import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function PasswordInputField({ label }) {
    return (
        <View>
            <Text style={styles.label}>{label}<Text style={{ color: 'red' }}>*</Text></Text>
            <View style={styles.inputFieldContainer}>
                <Image style={styles.eyeIcon} source={require('../assets/images/eyeclose.png')}/>
            <TextInput style={styles.inputField} placeholder={label}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'helvetica',
        marginTop: 10,
        color: '#000'
    },
    inputField: {
        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 15,
        marginTop: 10,
        flex:1
    },
    eyeIcon:{width:20, height:20,resizeMode:'contain',position:'absolute',top:20,right:10},
    inputFieldContainer:{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}
})