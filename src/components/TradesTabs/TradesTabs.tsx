import { StyleSheet } from 'react-native'
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from './All';
import New from './New';
import Active from './Active';
import Completed from './Completed';
import Rejected from './Rejected';

const Tab = createMaterialTopTabNavigator();


export default function TradesTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarItemStyle: { width: 120 },
                tabBarLabelStyle: {
                    textTransform: "none",
                    fontStyle: "normal",
                    fontSize: 18,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#4D55F5",
                    height: 2
                },
                tabBarActiveTintColor: "#4D55F5",
                tabBarInactiveTintColor: "#626262"

            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'All',

                }}
                name="All"
                component={All}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'New',

                }}
                name="New"
                component={New}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Active',

                }}
                name="Active"
                component={Active}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Completed',

                }}
                name="Completed"
                component={Completed}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Rejected',

                }}
                name="Rejected"
                component={Rejected}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({})