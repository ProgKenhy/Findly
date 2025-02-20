import React, {useContext} from "react";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {Box} from "@/components/ui/box";
import {Image as ExpoImage} from "expo-image";
import {
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar"
import {cssInterop} from "nativewind";
import {ColorModeContext} from "./_layout";
import {HStack} from "@/components/ui/hstack";
import {VStack} from "@/components/ui/vstack";
import {Feather} from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Icon, MoonIcon, SunIcon} from '@/components/ui/icon';
import {StyleSheet, Text} from "react-native";
import {Fab} from "@/components/ui/fab";
import { Pressable } from "@/components/ui/pressable";

const avatarPath = '@/assets/images/avatar.png';


cssInterop(SafeAreaView, {className: "style"});
cssInterop(ExpoImage, {className: "style"});


const Header = () => {
    const {colorMode}: any = useContext(ColorModeContext);
    return (
        <HStack className="flex-1 max-w-[1730px] w-full mx-auto justify-between">
            <VStack
                className="w-full md:max-w-[630px] lg:max-w-[400px] xl:max-w-[480px] mx-5 md:ml-8 mb-8 mt-10 lg:my-[44px] xl:ml-[80px] flex-1">
            </VStack>
        </HStack>
    );
};


export default function HomeScreen() {
    const [colorMode, setColorMode] = React.useState<"light" | "dark">("light");

    const styles = StyleSheet.create({
        header: {
            backgroundColor: colorMode === "light" ? "#fff" : "#000",
            borderBottomColor: colorMode === "light" ? "#E6E6E6" : "#414141",
            borderBottomWidth: 1,
        },
    });

    const handleColorMode = () => {
        setColorMode((prevMode: string) =>
            prevMode === "light" ? "dark" : "light"
        );
    };
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-background-0 relative">
            <Box className="bg-background-50 flex-1 p-6">
                <HStack className="justify-between items-center" space="md" reversed={false}>
                    {/* Левая часть - Аватар */}
                    <Box className="pr-0">
                        <Avatar size="xl">
                            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                            <AvatarImage
                                source={require(avatarPath)}
                            />
                            <AvatarBadge/>
                        </Avatar>
                    </Box>
                    <Box>
                        <VStack className="mb-1">
                            <Text className="font-bold text-lg mr-2">моша мисин</Text>
                            <Text className="font-light text-sm mr-2">Хули я баба то</Text>
                        </VStack>
                    </Box>

                    {/* Правая часть - Информация и иконки */}
                    <Box className="flex-1">
                        {/* Верхний ряд - 3 иконки */}
                        <HStack className="justify-center items-center space-x-4">
                            {/* Иконка смены темы */}
                            <Pressable onPress={handleColorMode}>
                                <Icon
                                    as={colorMode === "light" ? SunIcon : MoonIcon}
                                    size="lg"
                                    color={colorMode === "light" ? "black" : "white"}
                                />
                            </Pressable>

                            {/* Иконка настроек */}
                            <Feather name="settings" size={24} color={colorMode === "light" ? "black" : "white"}/>

                            {/* Иконка выхода */}
                            <MaterialCommunityIcons
                                name="logout"
                                size={24}
                                color={colorMode === "light" ? "black" : "white"}
                            />
                        </HStack>

                        {/* Нижний ряд - 2 иконки */}
                        <HStack className="justify-center items-center mt-4 space-x-6">
                            {/* Иконка глаза */}
                            <AntDesign
                                name="eyeo"
                                size={28}
                                color={colorMode === "light" ? "black" : "white"}
                            />

                            {/* Иконка часов */}
                            <Feather
                                name="clock"
                                size={24}
                                color={colorMode === "light" ? "black" : "white"}
                            />
                        </HStack>
                    </Box>
                </HStack>
            </Box>

            <Box className="bg-background-0 p-4">
                {/* Дополнительный контент */}
            </Box>
        </SafeAreaView>
    );
}
