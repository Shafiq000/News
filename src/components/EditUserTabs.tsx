import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import About from './UserTabs/About';
import Protfolio from './UserTabs/Protfolio';
import Reviews from './UserTabs/Reviews';
import EditAbout from './EditAbout';
import EditPortfolio from './EditPortfolio';

const Tab = createMaterialTopTabNavigator();


export default function EditUserTabs() {
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
                tabBarStyle:{maxWidth:200},
                tabBarActiveTintColor:"#4D55F5",
                tabBarInactiveTintColor:"#626262"

            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'About',

                }}
                name="EditAbout"
                component={EditAbout}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Portfolio',

                }}
                name="EditPortfolio"
                component={EditPortfolio}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({})