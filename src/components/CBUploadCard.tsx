import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../globalStyles'
import { Ionicons } from '@expo/vector-icons'

export default function CBUploadCard({title}:{title:String}) {
  return (
    <View style={styles.cardWrapper}>
    <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
        <Text style={[globalStyles.largeText,styles.headerTxt]}>{title}</Text>
        <Ionicons name='add-circle-outline' color={"#FFF"} size={20}/>
        </View>
        <View style={styles.cardBody}>
            <Image source={require('../assets/images/upload.png')} style={{width:25,height:20,resizeMode:'contain'}}/>
            <Text style={{color:"#212121",fontSize:12}}>Upload or drop your file here</Text>
            <Text style={{color:"#212121",fontSize:10}}>Maximum 2MB</Text>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardWrapper:{
        marginHorizontal:15,
        borderBottomWidth: 1,
        paddingVertical:15,
        borderBottomColor: "rgba(0,0,0,0.1)"
    },
    cardContainer:{
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        borderTopStartRadius:10,
        borderTopEndRadius:10
    },
    cardHeader:{
        height:40,
        justifyContent:'space-between',
        paddingHorizontal:10,
        backgroundColor:"#4D55F5",
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        flexDirection:"row",
        alignItems:'center'
    },
    headerTxt:{
        color:'#FFF'
    },
    cardBody:{
        height:80,
        justifyContent:'center',
        alignItems:'center'

    }
})