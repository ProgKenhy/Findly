import React, {useContext} from "react";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {Box} from "@/components/ui/box";
import {Image as ExpoImage} from "expo-image";
import {Avatar, AvatarBadge, AvatarFallbackText, AvatarImage} from "@/components/ui/avatar";
import {cssInterop} from "nativewind";
import {ColorModeContext} from "./ColorModeContext";
import {HStack} from "@/components/ui/hstack";
import {VStack} from "@/components/ui/vstack";
import {Feather} from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Icon, MoonIcon, SunIcon} from '@/components/ui/icon';
import {StyleSheet, Text} from "react-native";
import {Pressable} from "@/components/ui/pressable";

const avatarPath = '@/assets/images/avatar.png';

cssInterop(SafeAreaView, {className: "style"});
cssInterop(ExpoImage, {className: "style"});

export default function ProfileScreen() {
    const {colorMode, toggleColorMode} = useContext(ColorModeContext);
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-background-0 relative">
            <Box className="bg-background-50 flex-1 p-6">
                <HStack className="justify-between items-center" space="md" reversed={false}>
                    <Box className="pr-0">
                        <Avatar size="xl">
                            <AvatarFallbackText>Avatar</AvatarFallbackText>
                            <AvatarImage source={require(avatarPath)} />
                            <AvatarBadge/>
                        </Avatar>
                    </Box>

                    <Box>
                        <VStack className="mb-1">
                            <Text className="font-bold text-lg mr-2">моша мисин</Text>
                            <Text className="font-light text-sm mr-2">Хули я баба то</Text>
                        </VStack>
                    </Box>

                    <Box className="flex-1">
                        <HStack className="justify-center items-center space-x-4">
                            <Pressable onPress={toggleColorMode}>
                                <Icon
                                    as={colorMode === "light" ? SunIcon : MoonIcon}
                                    size="xl"
                                    color={colorMode === "light" ? "black" : "white"}
                                />
                            </Pressable>

                            <Feather
                                name="settings"
                                className="mx-2"
                                size={30}
                                color={colorMode === "light" ? "black" : "white"}
                            />

                            <MaterialCommunityIcons
                                name="logout"
                                size={30}
                                color={colorMode === "light" ? "black" : "white"}
                            />
                        </HStack>

                        <HStack className="justify-center items-center mt-4">
                            <AntDesign
                                name="eyeo"
                                size={30}
                                color={colorMode === "light" ? "black" : "white"}
                                className="mr-2"
                            />

                            <Feather
                                name="clock"
                                size={30}
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