import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../globalStyles'
import { Feather } from '@expo/vector-icons'
import TextInputField from './TextInputField'
import DropDownPicker from 'react-native-dropdown-picker';
import { useRouter } from 'expo-router'

export default function EditAbout() {
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Pear', value: 'pear'},
    ]);
    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>User Information</Text>
            </View>
            <TextInput 
            multiline
            style={{height:70,borderColor:'#ccc',borderWidth:1,borderRadius:10,marginTop:10}}
            />
            <Text style={{alignSelf:'flex-end',marginTop:5,color:"#bcbcbc"}} >2/200</Text>
            <View style={styles.btnContainer}>
            <Text style={styles.heading}>Services</Text>
            <Feather onPress={() => router.push('Services')}  size={20} color={'#4D55F5'} name="plus-circle" />
            </View>
            <TextInputField labelStyles={{fontSize:18}} inputFieldStyles={{borderRadius:10}} required={false} label='Location' placeHolder='Search by location'/>
            <View style={[styles.btnContainer,{borderBottomWidth:0}]}>
            <Text style={styles.heading}>Offering Rates</Text>
            <Feather size={20} color={'#4D55F5'} name="plus-circle" />
            </View>
            <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={'add Rates'}
                    style={{borderColor:"#ccc"}}
                    placeholderStyle={{color:"#ccc"}}
                    dropDownContainerStyle={{borderColor:"#ccc"}}
                
                />
         <TextInputField  inputFieldStyles={{borderRadius:10}} required={false}  placeHolder='$ 000'/>
         <TextInputField  inputFieldStyles={{borderRadius:10}} required={false}  placeHolder='School'/>
         <TextInputField  inputFieldStyles={{borderRadius:10}} required={false}  placeHolder='Qualifications'/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopColor:'#ccc',
        borderTopWidth:1,
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
        paddingVertical:15,
        marginTop:10

    },
    heading: {
        fontSize: 18,
        marginBottom: 5

    },
})