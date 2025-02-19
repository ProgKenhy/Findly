import React, {useContext} from "react";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {componentsList} from "@/utils/list";
import {ScrollView} from "@/components/ui/scroll-view";
import {Box} from "@/components/ui/box";

import {Image as ExpoImage} from "expo-image";
import {Text} from "@/components/ui/text";
import {Pressable} from "@/components/ui/pressable";
import {cssInterop} from "nativewind";
import {ColorModeContext} from "./_layout";
import {HStack} from "@/components/ui/hstack";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import {ChevronRightIcon, Icon} from "@/components/ui/icon";

cssInterop(SafeAreaView, {className: "style"});
cssInterop(ExpoImage, {className: "style"});


const Header = () => {
    const {colorMode}: any = useContext(ColorModeContext);
    return (
        <HStack className="flex-1 max-w-[1730px] w-full mx-auto justify-between">
            <VStack
                className="w-full md:max-w-[630px] lg:max-w-[400px] xl:max-w-[480px] mx-5 md:ml-8 mb-8 mt-10 lg:my-[44px] xl:ml-[80px] flex-1">
            </VStack>
        </HStack>
    );
};

export default function HomeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-background-0 relative">
            <Box className="bg-background-50 flex-1">
                <Header/>
            </Box>

            <Box className="bg-background-0">
            </Box>

        </SafeAreaView>
    );
}
