import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../globalStyles'

export default function Reviews() {
  return (
    <>
    <View style={styles.sortContainer}>
    <Text style={globalStyles.largeText}>Sorted by</Text>
    <Text style={[globalStyles.largeText, { color: "#4D55F5" }]}>Most Relevant</Text>
  </View>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.revCard}>
        <Image source={require('../../assets/images/revPic.png')} />

        <View style={styles.revContainer}>
          <View style={styles.revHeader}>
            <View style={{ gap: 5 }}>
              <Text style={globalStyles.largeText}>Printchallenge</Text>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <View style={{ width: 20, height: 16, backgroundColor: "#4D55F5" }} />
                <Text style={[globalStyles.mediumText, { color: "#ccc" }]}>UK</Text>
              </View>
              <Text style={[globalStyles.mediumText, { color: "#ccc" }]}>6 days ago</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <Image
                source={require('../../assets/images/star_ic.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text style={globalStyles.largeText}>4.22</Text>
            </View>
          </View>
          <Text numberOfLines={9} style={globalStyles.mediumText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</Text>
        </View>
      </View>
      <View style={styles.revCard}>
        <Image source={require('../../assets/images/revPic.png')} />

        <View style={styles.revContainer}>
          <View style={styles.revHeader}>
            <View style={{ gap: 5 }}>
              <Text style={globalStyles.largeText}>Printchallenge</Text>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <View style={{ width: 20, height: 16, backgroundColor: "#4D55F5" }} />
                <Text style={[globalStyles.mediumText, { color: "#ccc" }]}>UK</Text>
              </View>
              <Text style={[globalStyles.mediumText, { color: "#ccc" }]}>6 days ago</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <Image
                source={require('../../assets/images/star_ic.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text style={globalStyles.largeText}>4.22</Text>
            </View>
          </View>
          <Text numberOfLines={9} style={globalStyles.mediumText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</Text>
        </View>
      </View>
    </ScrollView></>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  revCard: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom:15

  },
  revContainer: {
    flex: 1,
   
  },
  revHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10
  },
  sortContainer: {
    marginHorizontal:15,
    marginTop:15,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})