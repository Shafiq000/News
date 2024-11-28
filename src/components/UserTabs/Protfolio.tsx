import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../globalStyles'

export default function Protfolio() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[globalStyles.container]}>
      <View style={styles.descContainer}>
        <Text style={globalStyles.mediumText}>These are some of the projects Bernadette.J did so you can get a better understanding of their experience.</Text>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginVertical: 10 }}>
          <Image style={{ width: 14, height: 14 }} source={require('../../assets/images/download.png')} />
          <Text style={[globalStyles.mediumText, { color: "#4D55F5" }]}>Share Portfolio</Text>
        </View>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Sample Work</Text>
      </View>
      <ImageBackground style={{width:170,height:180,justifyContent:'flex-end',}} imageStyle={{borderRadius:10}} source={require('../../assets/images/sWork.png')}>
        <View style={{backgroundColor:'#4D55F5',height:47,borderBottomLeftRadius:10,borderBottomEndRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={[globalStyles.mediumText,{color:"#FFF"}]}>Bathroom Cleaning
          </Text>
          </View>
      </ImageBackground>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Videos</Text>
      </View>
      <ImageBackground style={{width:300,height:150,justifyContent:'center',alignItems:'center'}} imageStyle={{borderRadius:10}} source={require('../../assets/images/video.png')}>
        <Image style={{width:60,height:60}} source={require('../../assets/images/play_ic.png')}/>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  descContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headingContainer: {
    marginBottom:10
  },
  heading: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5

  },
})