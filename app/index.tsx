import React, {useState} from "react";
import {Button, ButtonText} from "@/components/ui/button";
import {router} from "expo-router";
import {SafeAreaView} from "@/components/ui/safe-area-view";
import {VStack} from "@/components/ui/vstack";
import {MobileBottomTabs} from "@/components/custom/MobileBottomTabsLayout/MobileBottomTabs";
import {Box} from "@/components/ui";
import {Home, MessageCircle, User} from "lucide-react-native";



const index = () => {


    return (
        <Box className='flex-1'>
                {/*<Button
                    onPress={() => {
                        router.push("profile");
                    }}
                >
                    <ButtonText>Profile</ButtonText>
                </Button> */}


        </Box>
    );
};

export default index;