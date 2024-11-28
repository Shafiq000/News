import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SocialLogin() {
    return (
        <View style={{gap:20}}>
            <Pressable style={styles.btnContainer}>
                <Image style={{width:20,height:20}} source={require('../assets/images/google.png')}/>
                <Text style={styles.btnTxt}>Login with Google</Text>
            </Pressable>
            <Pressable style={styles.btnContainer}>
                <Image style={{width:16,height:20}} source={require('../assets/images/apple.png')}/>
                <Text style={styles.btnTxt}>Login with Apple</Text>
            </Pressable> 
             <Pressable style={styles.btnContainer}>
                <Image style={{width:20,height:20}} source={require('../assets/images/fb.png')}/>
                <Text style={styles.btnTxt}>Login with Facebook</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        height: 45,
        borderColor: '#DEDEDE',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        gap:10,
        borderRadius: 30
    },
    btnTxt: {
        fontSize: 16,
        fontFamily: 'helvetica',
        color: '#5b6576',
    },
})