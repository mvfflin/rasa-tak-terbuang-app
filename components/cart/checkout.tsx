import rupiah from "@/constants/rupiah";
import shopsNear from "@/constants/shopNear";
import shopsTop from "@/constants/shopTop";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, View, Text, Image } from "react-native";
import { Checkbox } from "react-native-paper";

export default function CheckoutScreen({ route, navigation }: any) {
    const { id, price } = route.params;
    console.log(price);

    const [checked, setChecked] = useState(false);

    const findShop =
        shopsNear.find((shop) => shop.id == id) ||
        shopsTop.find((shop) => shop.id == id);

    if (!findShop) return navigation.navigate("MainCart");

    return (
        <View className="bg-green-100 h-full">
            <Text
                className="text-3xl mt-12 text-center"
                style={{ fontFamily: "SFUI_Bold" }}
            >
                Checkout
            </Text>
            <Pressable
                className="absolute m-3 mt-12"
                onPress={() => navigation.navigate("MainCart")}
            >
                <Ionicons name="arrow-back" size={30} color={"black"} />
            </Pressable>
            <View
                // key={index}
                className="w-full h-auto flex-row space-x-5 mt-8 justify-center"
            >
                <Image
                    src={findShop.image}
                    className="h-full w-20 rounded-md"
                />
                <View className="my-5">
                    <Text
                        className="text-2xl  text-green-900"
                        style={{ fontFamily: "SFUI_Bold" }}
                    >
                        {findShop.nama}
                    </Text>
                    {/* <Text className="text-lg text-green-900">{`Quantity : ${shop.quantity}`}</Text> */}
                    <Text className="text-lg text-green-900 font-medium">{`Total: ${rupiah(
                        Math.floor(price)
                    )}`}</Text>
                </View>
            </View>
            <View className="flex-row m-3 mt-7  justify-between">
                <Text
                    className="text-2xl text-green-600"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    Payment method
                </Text>
                <Text className="text-lg text-green-700">CHANGE</Text>
            </View>
            <View className="flex-row w-full space-x-3 pl-3">
                <View className="inline-block">
                    <Ionicons name="card-outline" size={20} />
                </View>
                <Text className="inline-block text-xl">
                    1234-5678-9101-1121
                </Text>
            </View>
            <View className="flex-row m-3 mt-7  justify-between">
                <Text
                    className="text-2xl text-green-600"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    Delivery address
                </Text>
                <Text className="text-lg text-green-700">CHANGE</Text>
            </View>
            <View className="flex-row w-full space-x-3 px-3">
                <View className="inline-block">
                    <Ionicons name="home-outline" size={20} />
                </View>
                <Text className="inline-block text-xl">
                    Jl. Cendrawasih, Jaticempaka, Pondok Gede, Kota Bekasi, Jawa
                    Barat, Indonesia
                </Text>
            </View>
            <View className="flex-row m-3 mt-7  justify-between">
                <Text
                    className="text-2xl text-green-600"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    Delivery options
                </Text>
            </View>
            <View className="flex-row w-full space-x-3 pl-3">
                <View className="inline-block">
                    <Ionicons name="walk" size={20} />
                </View>
                <Text className="inline-block text-xl">
                    I'll pick it up myself
                </Text>
                {/* <View className="inline-block items-e">
                    <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color="green"
                    />
                </View> */}
            </View>
            <View className="flex-row m-3 mt-7 justify-between">
                <Text
                    className="text-2xl text-green-600"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    Non-contact delivery
                </Text>
                {/* <Text className="text-lg text-green-700">YES/NO</Text> */}
                <View>
                    <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color="green"
                    />
                </View>
            </View>
            <Pressable className="absolute bottom-0 px-5 py-3 w-full bg-green-800 active:bg-green-700">
                <Text
                    className="text-center text-xl text-white rounded-md"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    Confirm Checkout
                </Text>
            </Pressable>
        </View>
    );
}
