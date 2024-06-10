import { useClerk, useUser } from "@clerk/clerk-expo";
import { View, Text, Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import { useState, useEffect } from "react";
// import { Pressable } from "react-native-paper/lib/typescript/components/TouchableRipple/Pressable";

export default function ProfileScreen() {
    const { isLoaded, user } = useUser();
    const { signOut } = useClerk();

    useEffect(() => {}, [user]);

    return (
        <View className="bg-green-100 h-full">
            <View className="mt-20 mx-auto">
                <Avatar.Image
                    source={{ uri: user?.imageUrl }}
                    size={132}
                    className="h-32 w-32 aspect-square mx-auto"
                />
                <Text
                    className="text-3xl text-center mt-5"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    {user?.username}
                </Text>
            </View>
            <View className="flex-col flex w-full mx-auto justify-center space-y-5 absolute bottom-5 px-5">
                <Pressable
                    onPress={() => {
                        user?.delete();
                    }}
                    className="px-5 py-3 bg-red-600 active:bg-red-700 rounded-lg"
                >
                    <Text className="text-xl text-white text-center">
                        Delete Account
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => signOut()}
                    className="px-5 py-3 bg-red-600 active:bg-red-700 rounded-lg"
                >
                    <Text className="text-xl text-white text-center">
                        Log Out
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
