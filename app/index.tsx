import React, {useState, useEffect} from "react";
import {StatusBar, Platform} from "react-native";
import {Box} from "@/components/ui/box";
import {MobileBottomTabs} from "@/components/custom/MobileBottomTabs";
import {Home, MessageCircle, User} from "lucide-react-native";
import {useNavigation} from "@react-navigation/native"; // Импортируем хук для навигации

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
    const navigation = useNavigation(); // Используем хук useNavigation

    useEffect(() => {
        if (Platform.OS === "web") {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
        }
    }, []);

    // Обработчик для перехода между экранами
    useEffect(() => {
        if (activeTab === "Home") {
            navigation.navigate("HomePage"); // Переход на HomePage
        } else if (activeTab === "Profile") {
            navigation.navigate("ProfilePage"); // Переход на ProfilePage
        }
    }, [activeTab, navigation]);

    return (
        <>
            <Box className="flex-1">
                <StatusBar/>

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