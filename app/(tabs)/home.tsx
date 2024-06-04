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

export default function HomeScreen() {
    let [searchQuery, setSearchQuery] = useState("");

    return (
        <SafeAreaView className="bg-green-100 h-full">
            <View className="container bg-white h-10 mt-20 mx-auto w-72 rounded shadow-xl px-5 justify-between">
                {/* <Ionicons name="search" className="inline-block" /> */}
                <TextInput
                    className="h-full text-2xl inline-block focus:ring-2"
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
            </View>
        </SafeAreaView>
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
