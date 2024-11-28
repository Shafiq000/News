import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RadioBtn({state,setState}) {
  return (
    <View style={[styles.outerContainer,{borderColor:state?"#4D55F5":"rgba(0,0,0,0.5)"}]}>
      <View style={[styles.innerContainer,{borderColor:state?"#4D55F5":"rgba(0,0,0,0.5)"}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer:{height:14,width:14,borderRadius:7,borderWidth:1,justifyContent:"center",alignItems:'center',borderColor:"#4D55F5"},
    innerContainer:{height:8,width:8,borderRadius:4,borderWidth:3,borderColor:"#4D55F5"}
})