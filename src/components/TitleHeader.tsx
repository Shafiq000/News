import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function TitleHeader({title,rightIcon}:{title:String,rightIcon?:any}) {
    const router = useRouter()

  return (
    <View style={styles.headerContainer}>
    <Pressable onPress={()=>router.back()}><AntDesign size={30} color={'#000'} style={{ textAlign: 'left' }} name="arrowleft" /></Pressable>
    <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
    { rightIcon && <Image source={rightIcon} style={{height:15,width:15,resizeMode:'contain'}} />}
</View>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    headerTitle: { fontSize: 25, fontWeight: 'bold', color: "#4D55F5" },
    headerContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 ,
        borderBottomWidth:1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    

})