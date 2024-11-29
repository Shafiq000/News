import { StyleSheet, Text, View, Image, Pressable,Share } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Icon from "react-native-vector-icons/MaterialIcons";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { usePathname, useRouter } from 'expo-router';

const CustomDrawer = (props) => {
    const pathname = usePathname();
    const router = useRouter();

    const onShare = async () => {
        try {
          const result = await Share.share({
            message: 'Check out this amazing app: https://example.com', // Replace with your app's link
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // Shared with an activity type
              console.log('Shared with activity type:', result.activityType);
            } else {
              // Shared successfully
              console.log('App shared successfully');
            }
          } else if (result.action === Share.dismissedAction) {
            // Dismissed without sharing
            console.log('Share dismissed');
          }
        } catch (error) {
          console.error('Error while sharing:', error.message);
        }
      };

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="login" size={24} color="#1E90FF" />
                )}
                label={"Sign In"}
                labelStyle={styles.navItemLabel}
                style={{
                    backgroundColor: pathname == "index" ? "rgba(78, 223, 255,0.4)" : "#fff",
                }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('../../../auth')}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="bookmark" size={24} color="#1E90FF" />
                )}
                label={"My Bookmark"}
                labelStyle={styles.navItemLabel}
                style={{
                    backgroundColor: pathname == "bookmark" ? "rgba(78, 223, 255,0.4)" : "#fff",
                }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('/bookmark')}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="assignment" size={24} color="#1E90FF" />
                )}
                label={"My Reference"}
                labelStyle={styles.navItemLabel}
                style={{
                    backgroundColor: pathname == "/MyReference" ? "rgba(78, 223, 255,0.4)" : "#fff",
                }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('../../../preference')}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="article" size={24} color="#1E90FF" />
                )}
                label={"All News"}
                labelStyle={styles.navItemLabel}
                style={{
                    backgroundColor: pathname == "/AllNews" ? "rgba(78, 223, 255,0.4)" : "#fff",
                }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('AllNews')}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="notifications" size={24} color="#1E90FF" />
                )}
                label={"Notifications"}
                labelStyle={styles.navItemLabel}
                style={{
                    backgroundColor: pathname == "/Notifications" ? "rgba(78, 223, 255,0.4)" : "#fff",
                }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('Notifications')}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="language" size={24} color="#1E90FF" />
                )}
                label={"Language"}
                labelStyle={styles.navItemLabel}
                style={{
                    backgroundColor: pathname == "/Language" ? "rgba(78, 223, 255,0.4)" : "#fff",
                }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('Language')}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="nightlight-round" size={24} color="#1E90FF" />
                )}
                label={"Night Mode"}
                labelStyle={styles.navItemLabel}
                style={{ backgroundColor: "#fff" }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => {
                    // Implement night mode toggle logic here
                }}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="share" size={24} color="#1E90FF" />
                )}
                label={"Share this App"}
                labelStyle={styles.navItemLabel}
                style={{ backgroundColor: "#fff" }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => onShare()}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="star-rate" size={24} color="#1E90FF" />
                )}
                label={"Rate this App"}
                labelStyle={styles.navItemLabel}
                style={{ backgroundColor: "#fff" }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => {
                    // Implement rate logic here
                }}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="feedback" size={24} color="#1E90FF" />
                )}
                label={"Feedback"}
                labelStyle={styles.navItemLabel}
                style={{ backgroundColor: "#fff" }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('Feedback')}
            />
            <DrawerItem
                icon={({ color, size, focused }) => (
                    <Icon name="privacy-tip" size={24} color="#1E90FF" />
                )}
                label={"Privacy"}
                labelStyle={styles.navItemLabel}
                style={{
                    backgroundColor: pathname == "/Privacy" ? "rgba(78, 223, 255,0.4)" : "#fff",
                }}
                contentContainerStyle={styles.drawerItemContainer}
                onPress={() => router.push('Privacy')}
            />
        </DrawerContentScrollView>
    );
};

export default function Layout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    fontFamily: "helvetica",
                    marginLeft: -20,
                    fontSize: 18,
                    color: '#000'
                },
            }}
        >
        </Drawer>
    );
}

const styles = StyleSheet.create({
    navItemLabel: {
        marginLeft: 16, // Gap between icon and label
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: "helvetica",
        color: "#000",
    },
    drawerItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerIc: {
        width: 20,
        height: 20,
    },
});
