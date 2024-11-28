import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'
import globalStyles from '../globalStyles'
 type HeaderProps= {
  leftAction?:()=>void, rightAction?:()=>void, title?:string 
}
export default function Header({ leftAction, rightAction, title }:HeaderProps) {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <AntDesign size={30} color={'#000'} name="arrowleft" />
      </Pressable>
      {title && (
        <View>
          <Text style={{fontSize:25,color:"#4D55F5"}}>{title}</Text>
        </View>
      )}
      
        <Pressable onPress={() => rightAction()}>
        {rightAction && (  <Feather size={25} color={'#4D55F5'} name="edit-3" />)}
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems:'center',
    
  }
})
