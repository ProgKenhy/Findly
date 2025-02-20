import React, {useState} from "react";
import {Button, ButtonText} from "@/components/ui/button";
import {router} from "expo-router";
import {SafeAreaView} from "@/components/ui/safe-area-view";
import {VStack} from "@/components/ui/vstack";
import {MobileBottomTabs} from "@/components/custom/MobileBottomTabs";
import {Box} from "@/components/ui";
import {Home, MessageCircle, User} from "lucide-react-native";

const bottomTabs = [
    {
        icon: Home,
        label: "/",
        name: 'Home'
    },
    {
        icon: MessageCircle,
        label: "MessengerPage",
        name: 'Messages'
    },
    {
        icon: User,
        label: "ProfilePage",
        name: 'Profile'
    },
];

const index = () => {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <SafeAreaView className="md:flex flex-col items-center justify-center md:w-full h-full">
            <VStack className="p-2 md:max-w-[440px] w-full" space="xl">
                {/*<Button
                    onPress={() => {
                        router.push("profile");
                    }}
                >
                    <ButtonText>Profile</ButtonText>
                </Button> */}
                <Box className="h-[72px] items-center w-full flex md:hidden border-t border-outline-50">
                    <MobileBottomTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        bottomTabs={bottomTabs}
                    />
                </Box>
            </VStack>
        </SafeAreaView>
    );
};

export default index;