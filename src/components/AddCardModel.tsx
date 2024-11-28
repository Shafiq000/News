import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TextInputField from './TextInputField'
import { Ionicons } from '@expo/vector-icons'

export default function AddCardModel({setAddCardModel}) {
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
                    <Pressable onPress={()=>setAddCardModel(false)}><Ionicons name='close' size={20} style={{alignSelf:'flex-end',marginTop:10}}/></Pressable>
                    <Text style={styles.ModalHeader}>Add new card</Text>
                    <TextInputField label='Card holder name' placeHolder='Full Name' inputFieldStyles={{ borderRadius: 10 }}></TextInputField>
                    <TextInputField label='Card No' placeHolder='1234 5678 9012 1234' inputFieldStyles={{ borderRadius: 10 }}></TextInputField>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <TextInputField inputFieldContainer={{ flex: 1 }} label='Expiration date' placeHolder='MM/YY' inputFieldStyles={{ borderRadius: 10 }}></TextInputField>
                        <TextInputField inputFieldContainer={{ flex: 1 }} label='CVV / CVC' placeHolder='****' inputFieldStyles={{ borderRadius: 10 }}></TextInputField>
                    </View>
                    <Pressable style={styles.btnContainer}><Text style={{color:'#fff'}}>Add Card</Text></Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "flex-end", },
    ModelContainer: { backgroundColor: "#FFF", paddingHorizontal: 15,borderTopStartRadius:20,borderTopEndRadius:20 },
    btnContainer:{backgroundColor:"#4D55F5",height:45,borderRadius:22,marginVertical:30,alignItems:'center',justifyContent:'center'},
    ModalHeader:{fontSize:25,fontWeight:'bold',alignSelf:'center',marginVertical:5}

})