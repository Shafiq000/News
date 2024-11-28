import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../globalStyles'
import { Feather } from '@expo/vector-icons'

export default function EditPortfolio() {
  return (
    <View style={[globalStyles.container]}>
       <View style={[styles.btnContainer,{borderBottomWidth:0}]}>
            <Text style={styles.heading}>Sample Work</Text>
            <Feather size={20} color={'#4D55F5'} name="plus-circle" />
            </View>
            <View style={styles.uploadContainer}>
              <Image style={{width:40,height:30}} source={require('../assets/images/darkpic.png')}/>
              <Text style={globalStyles.mediumText}>Upload or drop your file here</Text>
              <Text style={[globalStyles.mediumText,{color:"#ccc"}]}>Maximum 2MB</Text>
            </View>
            <View style={[styles.btnContainer,{borderBottomWidth:0}]}>
            <Text style={styles.heading}>Videos</Text>
            <Feather size={20} color={'#4D55F5'} name="plus-circle" />
            </View>
            <View style={styles.uploadContainer}>
              <Image style={{width:40,height:30}} source={require('../assets/images/vid_ic.png')}/>
              <Text style={globalStyles.mediumText}>Upload or drop your file here</Text>
              <Text style={[globalStyles.mediumText,{color:"#ccc"}]}>Maximum 2MB</Text>
            </View>
            <Pressable style={styles.btn2Container}><Text style={styles.btnTxt}>Done</Text></Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:15,
    marginTop:10

},
uploadContainer:
  {borderColor:"#21212133",borderWidth:1,height:110,borderRadius:10,gap:5,justifyContent:'center',alignItems:'center'}
,
heading: {
    fontSize: 18,
    marginBottom: 5

},
btn2Container: {
  justifyContent: 'center',
  alignItems: 'center',
  height: 45,
  backgroundColor: '#4D55F5',
  borderRadius: 25,
  marginTop: 30
},
btnTxt: {
  fontSize: 18,
  fontFamily: 'helvetica',
  color: '#FFF',
},

})