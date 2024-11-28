import React from 'react';
import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#4EDEFF",
                tabBarInactiveTintColor: "#FFF",
                tabBarActiveBackgroundColor: "#4D55F5",
                tabBarStyle: {
                    backgroundColor: "#4D55F5",
                    padding: 15,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: "500",
                },
            }}
        >
            {/* Home Tab */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="bookmark"
                options={{
                    title: 'Bookmark',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "bookmark" : "bookmark-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            {/* Profile Tab */}
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
