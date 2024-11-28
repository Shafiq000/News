import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyles from '../globalStyles'
import { Ionicons } from '@expo/vector-icons'
import RadioBtn from './RadioBtn'

export default function CBCheckCard({ title }: { title: String }) {
    return (
        <View style={styles.cardWrapper}>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={[globalStyles.largeText, styles.headerTxt]}>{title}</Text>
                </View>
                <View style={styles.cardBody}>
                    <TouchableOpacity style={styles.radioContainer}>
                        <RadioBtn state={true} />
                        <Text style={globalStyles.smallText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.radioContainer}>
                        <RadioBtn state={false} />
                        <Text style={globalStyles.smallText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        marginHorizontal: 15,
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderBottomColor: "rgba(0,0,0,0.1)"
    },
    cardContainer: {
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    cardHeader: {
        height: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: "#4D55F5",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        flexDirection: "row",
        alignItems: 'center'
    },
    headerTxt: {
        color: '#FFF'
    },
    cardBody: {
        height: 40,
        paddingStart: 10,
        gap: 30,
        alignItems: 'center',
        flexDirection: "row"

    },
    radioContainer: { flexDirection: 'row', gap: 5, alignItems: 'center' }
})