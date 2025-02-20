import React, {useState} from "react";
import {StatusBar, Platform, StyleSheet} from "react-native";
import {Stack as ExpoStack} from "expo-router";  // Renaming the imported Stack
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {Pressable} from "@/components/ui/pressable";
import {Icon, ChevronLeftIcon} from "@/components/ui/icon";
import {ColorModeContext, ColorModeProvider} from "./ColorModeContext"; // Import ColorModeContext
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"; // Native stack import
import HomePage from "@/app/(tabs)/HomePage";
import ProfilePage from "@/app/(tabs)/ProfilePage";
import MessengerPage from "@/app/(tabs)/MessengerPage"

const NativeStack = createNativeStackNavigator(); // Renaming createNativeStackNavigator()

export default function RootLayout() {
    const styles = StyleSheet.create({
        header: {
            backgroundColor: "#fff", // You can dynamically change this based on colorMode
            borderBottomColor: "#E6E6E6",
            borderBottomWidth: 1,
        },
    });

    return (
        <>
            <StatusBar style="dark"/>
            <ColorModeProvider>
                <GluestackUIProvider mode="light">
                    <NativeStack.Navigator
                        screenOptions={{
                            headerStyle: styles.header,
                            headerTintColor: "#000",
                        }}
                    >
                        <NativeStack.Screen
                            name="HomePage"
                            component={HomePage}
                            options={{title: "Welcome"}}
                        />
                        <NativeStack.Screen
                            name="ProfilePage"
                            component={ProfilePage}
                            options={{title: "Profile", presentation: "modal"}}
                        />
                        <NativeStack.Screen
                            name="MessengerPage"
                            component={MessengerPage}
                            options={{title: "Messenger", presentation: "modal"}}
                        />
                    </NativeStack.Navigator>
                </GluestackUIProvider>
            </ColorModeProvider>
        </>
    );
}
