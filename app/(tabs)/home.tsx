import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TextInput,
    SafeAreaView,
    ScrollView,
} from "react-native";

import placeholderImage from "../../assets/images/placeholder-shop.jpg";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { AnimatedView } from "react-native-reanimated/lib/typescript/reanimated2/component/View";
import shop from "@/types/shop";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

const shops: Array<shop> = [
    {
        nama: "Toko Ekambi",
        offer: "Kue Hitam Manis",
        price: 10000,
        image: "https://images.unsplash.com/photo-1717451061024-5a74a0a112de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        nama: "Toko D202",
        offer: "Boyfriend Rent",
        price: 1000000,
        image: placeholderImage,
    },
];

const rupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
};

export default function HomeScreen() {
    let [searchQuery, setSearchQuery] = useState("");
    let [searchState, setSearchState] = useState(false);

    return (
        <SafeAreaView className="bg-green-100 h-full">
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
                    className="h-full text-2xl flex pl-2 w-full"
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
                <Text className="text-xl text-green-700 mt-5">
                    Find restaurants near you.
                </Text>
                {/* <GestureHandlerRootView> */}
                <ScrollView
                    decelerationRate={0}
                    horizontal
                    className="flex-row flex gap-10"
                    focusable
                >
                    {shops.map((shop, index) => {
                        return (
                            <View className="bg-white flex w-[300px] h-[200px] rounded-md">
                                <Image
                                    src={placeholderImage}
                                    className="h-[120px] w-full rounded-t-md object-cover"
                                />
                                <View className="pl-3 pt-1">
                                    <Text
                                        className="text-2xl text-green-900 p-2"
                                        style={{ fontFamily: "SFUI_Bold" }}
                                    >
                                        {shop.nama}
                                    </Text>
                                    <Text
                                        className="text-sm text-green-900 pl-2"
                                        style={{ fontFamily: "SFUI_Regular" }}
                                    >
                                        {`${shop.offer} (${rupiah(
                                            shop.price
                                        )})`}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
                {/* </GestureHandlerRootView> */}
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
