import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Box} from "@/components/ui/box";
import {MobileBottomTabs} from "./MobileBottomTabs";
import {Home, MessageCircle, User} from "lucide-react-native";

const bottomTabs = [
    {
        icon: MessageCircle,
        label: "MessengerPage",
        name: "Messages",
    },
    {
        icon: Home,
        label: "/",
        name: "Map",
    },
    {
        icon: User,
        label: "ProfilePage",
        name: "Profile",
    },
];

export const MobileBottomTabsLayout = ({children}: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <SafeAreaView className="flex-1 bg-background-0">
            <Box className="flex-1">{children}</Box>
            <Box className="h-[72px] items-center w-full border-t border-outline-50">
                <MobileBottomTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    bottomTabs={bottomTabs}
                />
            </Box>
        </SafeAreaView>
    );
};