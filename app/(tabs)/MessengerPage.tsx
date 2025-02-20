// InboxPage.js
import React from "react";
import {Box, HStack} from "@/components/ui";
import {Text, ScrollView} from "react-native";

const MessengerPage = () => {
    return (
        <Box className="w-full">
            <HStack className="justify-between items-center">
                <Text>Inbox</Text>
            </HStack>
            <ScrollView>
                <Text>Message content here...</Text>
            </ScrollView>
        </Box>
    );
};

export default MessengerPage;
