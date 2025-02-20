import React, {useState} from "react";
import {StatusBar, Platform, StyleSheet} from "react-native";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {ColorModeContext, ColorModeProvider} from "./ColorModeContext"; // Import ColorModeContext
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
                            headerShown: false,
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
                            options={{title: "Profile"}}
                        />
                        <NativeStack.Screen
                            name="MessengerPage"
                            component={MessengerPage}
                            options={{title: "Messenger"}}
                        />
                    </NativeStack.Navigator>
                </GluestackUIProvider>
            </ColorModeProvider>
        </>
    );
}
