import { StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
    label?: string, placeHolder?: string, required?: boolean, inputFieldStyles?: TextStyle,labelStyles?:TextStyle,inputFieldContainer?:ViewStyle
}
export default function TextInputField({ label, placeHolder, required, inputFieldStyles,labelStyles ,inputFieldContainer}: Props) {
    return (
        <View style={inputFieldContainer}>
            {label &&<Text style={[styles.label,labelStyles]}>{label}{required && <Text style={{ color: 'red' }}>*</Text>}</Text>}
            <TextInput style={[styles.inputField, inputFieldStyles]} placeholder={placeHolder ? placeHolder : label}></TextInput>
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
        fontSize: 16
    }
})