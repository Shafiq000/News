import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import About from './About';
import Protfolio from './Protfolio';
import Reviews from './Reviews';

const Tab = createMaterialTopTabNavigator();


export default function UserTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: "none",
                    fontStyle: "normal",
                    fontSize: 18,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#4D55F5",
                    height: 2
                },
                tabBarStyle:{maxWidth:300,elevation:0},
                tabBarActiveTintColor:"#4D55F5",
                tabBarInactiveTintColor:"#626262",

            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'About',

                }}
                name="About"
                component={About}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Reviews',

                }}
                name="Reviews"
                component={Reviews}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Protfolio',

                }}
                name="Protfolio"
                component={Protfolio}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({})