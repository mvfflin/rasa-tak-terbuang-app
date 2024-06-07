import shopsNear from "@/constants/shopNear";
import shopNear from "@/types/shop";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    Pressable,
} from "react-native";
import { Button } from "react-native-paper";
// import { Pressable } from "react-native-paper/lib/typescript/components/TouchableRipple/Pressable";
const rupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
};

const kmFormat = new Intl.NumberFormat("en-US", {
    // Make users locale dynamic
    style: "unit",
    unit: "kilometer",
    unitDisplay: "short",
    maximumFractionDigits: 1,
});

export default function MainScreen({ navigation }: any) {
    const { isLoaded, user } = useUser();

    let [searchQuery, setSearchQuery] = useState("");
    let [searchState, setSearchState] = useState(false);
    return (
        <ScrollView className="bg-green-100 h-full">
            <View
                style={{
                    borderWidth: searchState ? 1 : 0,
                    borderColor: "green",
                }}
                className="container focus:bg-black flex-row items-center bg-white h-10 mt-20 mx-auto w-72 rounded-full shadow-xl px-5"
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
                    Hi, {user?.username}!
                </Text>
                <Text className="text-xl text-green-700 mt-5 mb-2">
                    Find restaurants near you.
                </Text>
                {/* <GestureHandlerRootView> */}
                <ScrollView
                    decelerationRate={0}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    className="flex-row flex gap-10"
                    focusable
                >
                    {shopsNear.map((shop, index) => {
                        return (
                            <Pressable
                                className="bg-white flex w-[300px] h-[200px] rounded-md active:bg-neutral-200"
                                key={index}
                                onPress={() =>
                                    navigation.navigate("ShopDetails", {
                                        id: shop.id,
                                    })
                                }
                            >
                                <Image
                                    src={shop.image}
                                    className="h-[120px] w-full rounded-t-md object-cover"
                                />
                                <View className="pl-3 pt-1">
                                    <Text
                                        className="text-2xl text-green-900 p-2"
                                        style={{ fontFamily: "SFUI_Bold" }}
                                    >
                                        {`${shop.nama} (${kmFormat.format(
                                            shop.distance
                                        )})`}
                                    </Text>
                                    <Text
                                        className="text-sm text-green-900 pl-2"
                                        style={{
                                            fontFamily: "SFUI_Regular",
                                        }}
                                    >
                                        {`${shop.offer} (${rupiah(
                                            shop.price
                                        )})`}
                                    </Text>
                                </View>
                            </Pressable>
                        );
                    })}
                </ScrollView>
                {/* </GestureHandlerRootView> */}
            </View>
            <View className="mt-5 ml-5">
                <Text className="text-xl text-green-700 mb-5">
                    Our top picks.
                </Text>
                <ScrollView
                    decelerationRate={0}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    className="flex-row flex gap-10"
                    focusable
                >
                    {shopsNear.map((shop, index) => {
                        return (
                            <View
                                className="bg-white flex w-[300px] h-[200px] rounded-md"
                                key={index}
                            >
                                <Image
                                    src={
                                        "https://images.unsplash.com/photo-1717451061024-5a74a0a112de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    }
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
                                        style={{
                                            fontFamily: "SFUI_Regular",
                                        }}
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
            </View>
        </ScrollView>
    );
}
