import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import globalStyles from '../../globalStyles'

export default function New() {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <ImageBackground style={styles.cardImageContainer} imageStyle={{ borderRadius: 10 }} source={require('../../assets/images/demoPic.png')}>
                    <View style={styles.overlay}>
                    </View>
                    <View style={styles.revContainer}>
                        <Text style={{ color: "#4D55F5", fontSize: 14 }}>8-Dec-23</Text></View>
                    <View style={styles.bagContainer}>
                        <Text style={{ color: "#FFF", fontSize: 14 }}>New</Text></View>
                </ImageBackground>
                <View style={styles.addressContainer}>
                    <FontAwesome6 name='location-dot' size={15} color={"#4D55F5"} />
                    <Text style={globalStyles.mediumText}>14 Market Pl, Ringwood, United Kingdom</Text>
                </View>
                <View style={styles.divider} />
                <View style={[styles.cardRow,{justifyContent:'space-between'}]}>
                    <View><Text style={{fontSize:20,fontWeight:'bold'}}>{'James.w'}</Text>
                    <Text style={globalStyles.largeText}>Cleaner</Text></View>
                    <Text style={[globalStyles.largeText,{color:"#1CC072"}]}>£12/h</Text>
                </View>
                <View style={styles.cardRow}>
                <View style={styles.btn}><Text style={[globalStyles.mediumText,{color:"#fff"}]}>View Profile</Text></View>
                <View style={[styles.btn,{backgroundColor:"#1CC072"}]}><Text style={[globalStyles.mediumText,{color:"#fff"}]}>Accept</Text></View>
                <View style={[styles.btn,{backgroundColor:"#E30000"}]}><Text style={[globalStyles.mediumText,{color:"#fff"}]}>Decline</Text></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 20,
        marginHorizontal: 10,
    },
    cardContainer: {
        padding: 15,
        backgroundColor: "#FBF2EB",
        borderRadius: 10

    },
    cardImageContainer: {
        height: 150
    },
    overlay:{ flex: 1, opacity: 0.3, backgroundColor: 'black', borderRadius: 10 },
    addressContainer:{ flexDirection: 'row', gap: 5, marginTop: 15 },
    divider: {
        height: 1, backgroundColor: '#acacac', marginVertical: 15
    },
    btn:{
        backgroundColor:"#4D55F5",
        borderRadius:20,
        paddingVertical:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    cardRow:{flexDirection:'row',gap:15},
    revContainer: { backgroundColor: '#4EDEFF', position: 'absolute', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5, width: 80, height: 30, borderTopStartRadius: 10, borderBottomEndRadius: 10 },
    bagContainer: { backgroundColor: '#4D55F5', right: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5, width: 80, height: 30, borderTopEndRadius: 10, borderBottomStartRadius: 10 },

})