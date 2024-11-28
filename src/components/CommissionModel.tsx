import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TextInputField from './TextInputField'
import { Ionicons } from '@expo/vector-icons'
import globalStyles from '../globalStyles'

export default function CommissionModel({ setCommissionModel }) {
    const inset = useSafeAreaInsets()
    return (
        <Modal
            statusBarTranslucent={true}
            transparent={true}
            visible={true}
            animationType='slide'
        >
            <View style={[styles.mainContainer, { paddingBottom: inset.bottom }]}>
                <View style={styles.ModelContainer}>
                    <Pressable onPress={() => setCommissionModel(false)}>
                        <Ionicons name='close' size={20} style={{ alignSelf: 'flex-end', marginTop: 10 }} />
                    </Pressable>
                    <Text style={styles.ModalHeader}>Commission</Text>
                    <View style={styles.commRow}>
                        <Text style={globalStyles.largeText}>£0 to £100</Text>
                        <Text style={styles.dottedline} />
                        <Text style={globalStyles.largeText}>0%</Text>
                    </View>
                    <View style={styles.commRow}>
                        <Text style={globalStyles.largeText}>£101 to £500</Text>
                        <Text style={styles.dottedline} />
                        <Text style={globalStyles.largeText}>7%</Text>
                    </View>
                    <View style={styles.commRow}>
                        <Text style={globalStyles.largeText}>£501 to £1000</Text>
                        <Text style={styles.dottedline} />
                        <Text style={globalStyles.largeText}>5%</Text>
                    </View>
                    <View style={styles.commRow}>
                        <Text style={globalStyles.largeText}>£1001 to £5000</Text>
                        <Text style={styles.dottedline} />
                        <Text style={globalStyles.largeText}>3%</Text>
                    </View>
                    <View style={styles.commRow}>
                        <Text style={globalStyles.largeText}>£5001 to +</Text>
                        <Text style={styles.dottedline} />
                        <Text style={globalStyles.largeText}>2%</Text>
                    </View>

                    <Pressable onPress={()=>setCommissionModel(false)} style={styles.btnContainer}><Text style={{ color: '#fff' }}>OK</Text></Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "flex-end", },
    ModelContainer: { backgroundColor: "#FFF", paddingHorizontal: 15, borderTopStartRadius: 20, borderTopEndRadius: 20 },
    btnContainer: { backgroundColor: "#4D55F5", height: 45, borderRadius: 22, marginVertical: 30, alignItems: 'center', justifyContent: 'center' },
    ModalHeader: { fontSize: 25, fontWeight: 'bold', alignSelf: 'center', },
    dottedline: { borderBottomWidth: 1, flex: 1, borderColor: "#000", borderStyle: 'dashed', marginBottom: 5, height: 15 },
    commRow: { flexDirection: 'row', justifyContent: 'center', gap: 5,marginVertical:10 }

})