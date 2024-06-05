import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TextInput,
    SafeAreaView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { AnimatedView } from "react-native-reanimated/lib/typescript/reanimated2/component/View";
import {
    GestureHandlerRootView,
    ScrollView,
} from "react-native-gesture-handler";

export default function HomeScreen() {
    let [searchQuery, setSearchQuery] = useState("");
    let [searchState, setSearchState] = useState(false);

    return (
        <View className="bg-green-100 h-full">
            <View
                style={{
                    borderWidth: searchState ? 1 : 0,
                    borderColor: "green",
                }}
                className="container focus:bg-black flex-row items-center bg-white h-10 mt-20 mx-auto w-72 rounded shadow-xl px-5"
            >
                {/* <Ionicons name="search" className="inline-block" /> */}
                <Ionicons name="search" className="flex" />
                <TextInput
                    onFocus={() => {
                        setSearchState(true);
                    }}
                    onBlur={() => setSearchState(false)}
                    className="h-ful text-2xl flex pl-2"
                    placeholder="Search..."
                    onChange={(e: any) => {
                        setSearchQuery(e.target.value);
                    }}
                ></TextInput>
            </View>

            <View className="mt-8 ml-5">
                <Text
                    className="text-3xl text-green-800"
                    style={{ fontFamily: "Montserrat_Bold" }}
                >
                    Hi, User!
                </Text>
                <GestureHandlerRootView>
                    <ScrollView horizontal className="bg-black h-10">
                        <View className="bg-black"></View>
                    </ScrollView>
                </GestureHandlerRootView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
