import React, {useEffect, useState} from "react";
import {Box, HStack, Button} from "@/components/ui";
import {Platform, ScrollView, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {MobileBottomTabs} from "@/components/custom/MobileBottomTabs";
import {Home, MessageCircle, User} from "lucide-react-native"; // Импортируем хук для навигации


const bottomTabs = [
    {
        icon: Home,
        label: "Home",
    },
    {
        icon: MessageCircle,
        label: "Messenger",
        disabled: false,
    },
    {
        icon: User,
        label: "Profile",
    },
];

const HomePage = () => {
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
        } else if (activeTab === "Messenger") {
            navigation.navigate("MessengerPage"); // Переход на ProfilePage
        }
    }, [activeTab, navigation]);

    return (
        <Box className="w-full">
            <HStack className="justify-between items-center">
                <Text>Welcome to HomePage</Text>
                <Button onPress={() => navigation.navigate("ProfilePage")}>
                    <Text>Go to Profile</Text>
                </Button>
            </HStack>
            <ScrollView>
                <Text>More content here...</Text>
            </ScrollView>
            <Box className="h-[72px] items-center w-full flex md:hidden border-t border-outline-50">
                <MobileBottomTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    bottomTabs={bottomTabs}
                />
            </Box>
        </Box>
    );
};

export default HomePage;