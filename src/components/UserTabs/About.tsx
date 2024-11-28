import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const DATA = ['10 km', 'Experince level', 'Industry', 'Location', 'Carpet cleaning', 'Carpet cleaning']

export default function About() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>User Information</Text>
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.descTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.... <Text style={styles.seeMoreTxt}>More</Text>
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.imgIc} source={require('../../../src/assets/images/loc.png')} />
                <View>
                    <Text style={styles.imgTopTxt}>From</Text>
                    <Text style={styles.imgBottomTxt}>Manchester</Text>
                </View>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.imgIc} source={require('../../../src/assets/images/Profile_ic.png')} />
                <View>
                    <Text style={styles.imgTopTxt}>Member since</Text>
                    <Text style={styles.imgBottomTxt}>Feb 2022</Text>
                </View>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.imgIc} source={require('../../../src/assets/images/Mobile.png')} />
                <View>
                    <Text style={styles.imgBottomTxt}>+01 1234 45678 02</Text>
                </View>
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Offering Rates</Text>
            </View>
            <View style={[styles.imgContainer, { paddingVertical: 0 }]}>
                <View style={styles.boxContainer}>
                    <Text style={styles.imgTopTxt}>Per hour</Text>
                    <Text style={styles.boxTxt}> £12</Text>
                </View>
                <View style={styles.boxContainer}>
                    <Text style={styles.imgTopTxt}>Per day</Text>
                    <Text style={styles.boxTxt}> £89</Text>
                </View>
                <View style={[styles.boxContainer, { borderRightColor: '#fff' }]}>
                    <Text style={styles.imgTopTxt}>Per hour</Text>
                    <Text style={styles.boxTxt}> N/A</Text>
                </View>
            </View>
            <View style={styles.tagsContainer}>{DATA.map((item,key) => (<View key={key} style={styles.tagContainer}><Text style={styles.tagTxt}>{item}</Text></View>))}</View>
            <Text style={styles.seeMoreTxt}>See 11 more</Text>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Qualifications</Text>
            </View>
            <View style={styles.qContainer}>
                    <Text style={styles.imgTopTxt}>School, 2019</Text>
                    <Text style={styles.imgBottomTxt}>MBA <Text style={styles.imgTopTxt}>(Marketing)</Text></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15
    },
    headingContainer: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    tagsContainer: { flexDirection: 'row', gap: 10, flexWrap: 'wrap', marginTop: 15 },
    tagContainer: { paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, borderColor: '#ccc', borderWidth: 1 },
    tagTxt: { fontSize: 14, fontFamily: 'helvetica', color: '#000' },

    heading: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 5

    },
    seeMoreTxt:{
        color: '#4D55F5', marginTop: 5
    },
    descContainer: {
        paddingVertical: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    imgContainer: {
        paddingVertical: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    qContainer: {
        paddingVertical: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        justifyContent:'center',
        gap: 5
    },
    descTxt: {
        fontFamily: 'helvetica',
        color: '#626262'

    },
    imgIc: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    imgTopTxt: {
        color: '#626262', fontSize: 12
    },
    boxTxt: {
        color: '#000', fontSize: 18, paddingTop: 10
    },
    imgBottomTxt: {
        color: '#000', fontSize: 18,
    },
    boxContainer: {
        flex: 1,
        borderRightColor: "#ccc",
        borderRightWidth: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})