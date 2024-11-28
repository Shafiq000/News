import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function AppHeader() {
    const navigation = useNavigation()
   const styles =  Styles()

  return (
    <View style={styles.header}>
    <Pressable onPress={() => navigation.toggleDrawer()}>
        <Image style={{ width: 22, height: 25 }} source={require('../assets/images/drawerIc.png')} /></Pressable>
    <Image style={{ width: 174, height: 25 }} source={require('../assets/images/logo.png')} />
    <Image style={{ width: 22, height: 22 }} source={require('../assets/images/alert.png')} />
</View>
  )
}

const Styles = () => {
    const inset = useSafeAreaInsets()

    return StyleSheet.create({
        header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4D55F5',
        paddingHorizontal: 15,
        paddingTop: inset.top,
        height: 110,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15

    },
})
}