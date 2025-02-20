import React from "react";
import {Box, HStack} from "../components/ui";


import {ScrollView, Text} from "react-native";

const HomePage = ({activeTab, setActiveTab}: any) => {
    return (
        <>
            <Box className={`w-full ${activeTab != "Profile" ? "flex" : "hidden"}`}>
                {/* top banner */}

            </Box>
            <Text>Its homePage</Text>
            {/* mobile */}
            <ScrollView
                className="h-[1px] md:hidden"
            >
                <Box
                    className={`${activeTab !== "Profile" ? "flex" : "hidden"} md:hidden`}
                >


                </Box>
            </ScrollView>

        </>
    );
};

export default HomePage;