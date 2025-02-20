import React, {useState} from "react";
import "../global.css";
import {Stack, useRouter} from "expo-router";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {Icon, ChevronLeftIcon, SunIcon, MoonIcon} from "@/components/ui/icon";
import {StyleSheet, Platform} from "react-native";
import {Pressable} from "@/components/ui/pressable";
import {StatusBar} from "expo-status-bar";

export const ColorModeContext = React.createContext<{
    colorMode: "light" | "dark";
    toggleColorMode: () => void;
}>({
    colorMode: "light",
    toggleColorMode: () => {
    },
});

const CustomBackButton = () => {
    const router = useRouter();

    return (
        <Pressable
            onPress={() => {
                router.back();
            }}
            className="web:ml-2 ios:-ml-2 android:mr-4"
        >
            <Icon as={ChevronLeftIcon} size="xl"/>
        </Pressable>
    );
};

export default function RootLayout() {
    const [colorMode, setColorMode] = useState<"light" | "dark">("light");

    const toggleColorMode = () => {
        setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const styles = StyleSheet.create({
        header: {
            backgroundColor: colorMode === "light" ? "#fff" : "#000",
            borderBottomColor: colorMode === "light" ? "#E6E6E6" : "#414141",
            borderBottomWidth: 1,
        },
    });


    const getHeaderOptions = (title: string) => ({
        headerTitle: title,
        headerTintColor: colorMode === "light" ? "#000" : "#fff",
        headerStyle: styles.header,
        ...(Platform.OS !== "android" && {
            headerLeft: () => <CustomBackButton/>,
        }),
    });

    return (
        <>
            <StatusBar
                style={colorMode === "light" ? "dark" : "light"}
                backgroundColor={colorMode === "light" ? "#F6F6F6" : "#272625"}
            />
            <ColorModeContext.Provider value={{colorMode, toggleColorMode}}>
                <GluestackUIProvider mode={colorMode}>
                    <Stack>
                        <Stack.Screen name="index" options={{headerShown: false}}/>
                    </Stack>
                </GluestackUIProvider>
            </ColorModeContext.Provider>
        </>
    );
}
