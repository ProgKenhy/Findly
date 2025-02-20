import React, {useState, useEffect} from "react";
import {StatusBar, Platform} from "react-native";
import {Box} from "@/components/ui/box";
import {MobileBottomTabs} from "@/components/custom/MobileBottomTabs";
import HomePage from "./HomePage";
import {Home, MessageCircle, User} from "lucide-react-native";

const bottomTabs = [
    {
        icon: Home,
        label: "Home",
    },
    {
        icon: MessageCircle,
        label: "Inbox",
        disabled: false,
    },
    {
        icon: User,
        label: "Profile",
    },
];

export default function Index() {
    const [activeTab, setActiveTab] = useState("Home");

    useEffect(() => {
        if (Platform.OS === "web") {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
        }
    }, []);

    return (
        <>
            <Box className="flex-1">
                <StatusBar/>

                <Box className="flex-1">
                    {/* Conditional Rendering Based on Active Tab */}
                    {activeTab === "Home" && <HomePage/>}
                    {/* Add other page components here, like ProfilePage */}
                </Box>

                {/* Mobile Bottom Navigation */}
                <Box className="h-[72px] items-center w-full flex md:hidden border-t border-outline-50">
                    <MobileBottomTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        bottomTabs={bottomTabs}
                    />
                </Box>
            </Box>
        </>
    );
}
