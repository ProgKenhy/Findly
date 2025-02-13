import * as React from 'react';
import {Dimensions, View} from 'react-native';
import {Pencil} from '~/lib/icons/Pencil';
import {Avatar, AvatarFallback, AvatarImage} from '~/components/ui/avatar';
import {Button} from '~/components/ui/button';
import {CardContent, CardFooter, CardHeader} from '~/components/ui/card';
import {Text} from '~/components/ui/text';
import {ThemeToggle} from '~/components/ThemeToggle';
// import {Chart} from '~/components/ui/chart'; // Hypothetical chart component

const GITHUB_AVATAR_URI =
    'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function UserProfileScreen() {
    const [progress, setProgress] = React.useState(78);
    const width = Dimensions.get('window').width;

    function updateProgressValue() {
        setProgress(Math.floor(Math.random() * 100));
    }

    return (
        <View className="flex-1 p-4 bg-secondary">

            {/* Header Section */}
            <CardHeader className="flex-row items-center justify-between gap-4">
                <View className="flex-row items-center gap-4">
                    <Avatar alt="Avatar" className="w-16 h-16">
                        <AvatarImage source={{uri: GITHUB_AVATAR_URI}}/>
                        <AvatarFallback>
                            <Text>RS</Text>
                        </AvatarFallback>
                    </Avatar>
                    <View className="flex-1">
                        <View className="flex-row items-center">
                            <Text className="text-xl font-semibold">Rick Sanchez</Text>
                            <Pencil className="text-muted-foreground mx-2" size={16} height={16} width={16}/>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-muted-foreground">Scientist</Text>
                            <Pencil className="text-muted-foreground mx-2" size={16} height={16} width={16}/>
                        </View>
                    </View>
                </View>
                <View className="absolute top-25 right-0 mr-4">
                    <ThemeToggle/>
                </View>
            </CardHeader>


            {/* Buttons Section */}
            <View className="flex-row justify-around mt-4">
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </View>

            {/* Placeholders Section */}
            <CardContent className="mt-4">
                <View className="flex-row justify-around">
                    <View className="items-center">
                        <Text className="text-sm text-muted-foreground">Dimension</Text>
                        <Text className="text-xl font-semibold">C-137</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-sm text-muted-foreground">Age</Text>
                        <Text className="text-xl font-semibold">70</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-sm text-muted-foreground">Species</Text>
                        <Text className="text-xl font-semibold">Human</Text>
                    </View>
                </View>
            </CardContent>

            {/* Invitations Section */}
            <CardContent className="mt-4">
                <Text className="text-lg font-semibold mb-2">Invitations</Text>
                <View className="border border-muted rounded-lg p-4">
                    <Text className="text-center text-muted-foreground">No invitations yet</Text>
                </View>
            </CardContent>

            {/* Graph Section */}
            <CardContent className="mt-4">
                <Text className="text-lg font-semibold mb-2">New Chats & Friends</Text>
                {/*<Chart className="h-40"/>*/}
            </CardContent>

            {/* Footer Navigation */}
            <CardFooter className="flex-row justify-between mt-auto pb-4">
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </CardFooter>
        </View>
    );
}
