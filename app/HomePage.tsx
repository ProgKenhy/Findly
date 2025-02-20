import React from "react";
import {Box, HStack} from "@/components/ui";
import {ScrollView, Text} from "react-native";

const HomePage = () => {
    return (
        <Box className="w-full">
            <HStack className="justify-between items-center">
                <Text>Welcome to HomePage</Text>
            </HStack>
            <ScrollView>
                <Text>More content here...</Text>
            </ScrollView>
        </Box>
    );
};

export default HomePage;
