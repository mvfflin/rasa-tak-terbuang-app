import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    Pressable,
    RefreshControl,
} from "react-native";
import shopNear from "@/types/shop";
import rupiah from "@/constants/rupiah";
import { decrementQuantity, incrementQuantity } from "@/functions/CartReducer";

export default function MainCartScreen({ navigation }: any) {
    const allItems = useSelector((state: any) => state.cart.cart);
    const [random, setRandom] = useState<any>(null);
    useEffect(() => {
        setRandom(Math.floor(Math.random() * 999));
    }, [allItems]);
    const dispatch = useDispatch();
    // console.log(allItems);
    const [searchState, setSearchState] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    // const onTextLayout = useCallback((e: any) => {
    //     console.log(e.nativeEvent.lines.length);
    // }, []);

    const filteredItems = useMemo(
        () =>
            allItems.filter((item: shopNear) =>
                item.nama.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        [searchQuery, random]
    );

    const randomRefresh = () => {
        setRandom(Math.floor(Math.random() * 999));
    };

    let increaseQuantity = (item: shopNear) => {
        dispatch(incrementQuantity(item));
        setRandom(Math.floor(Math.random() * 999));
        console.log("pressed");
    };

    let decreaseQuantity = (item: shopNear) => {
        dispatch(decrementQuantity(item));
        setRandom(Math.floor(Math.random() * 999));
        console.log("pressed");
    };

    return (
        <View className="bg-green-100 h-full">
            <View className="mt-28 mx-5">
                <Text
                    className="text-5xl text-green-600"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    My Cart
                </Text>
                <View
                    style={{
                        borderWidth: searchState ? 1 : 0,
                        borderColor: "green",
                    }}
                    className="container focus:bg-black flex-row items-center bg-white h-10 mt-2 w-full rounded-full shadow-xl px-5"
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
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>
            </View>
            <ScrollView className="h-full mt-5 mx-5 space-y-5">
                {filteredItems.map((shop: shopNear, index: number) => {
                    return (
                        <View
                            key={index}
                            className="w-auto h-auto flex-row space-x-5"
                        >
                            <Image
                                src={shop.image}
                                className="w-20 rounded-md aspect-square"
                            />
                            <View className="h-auto my-auto flex-1">
                                <Text
                                    className="text-lg text-green-900"
                                    style={{
                                        fontFamily: "SFUI_Bold",
                                    }}
                                    adjustsFontSizeToFit={true}
                                    numberOfLines={2}
                                    // onTextLayout={onTextLayout}
                                >
                                    {shop.nama}
                                </Text>
                                {/* <Text className="text-lg text-green-900">{`Quantity : ${shop.quantity}`}</Text> */}
                                <Text
                                    numberOfLines={1}
                                    adjustsFontSizeToFit={true}
                                    className="text-lg text-green-900 font-medium"
                                >{`Total: ${rupiah(
                                    Math.floor(shop.quantity! * shop.price)
                                )}`}</Text>
                            </View>
                            <View className=" space-y-2">
                                <View className="flex-row space-x-5 p-2 rounded-md bg-green-500">
                                    <Pressable
                                        onPress={() => {
                                            decreaseQuantity(shop);
                                            setRandom(
                                                Math.floor(Math.random() * 999)
                                            );
                                        }}
                                    >
                                        <Text
                                            numberOfLines={1}
                                            adjustsFontSizeToFit={true}
                                            className="text-xl text-white"
                                            style={{
                                                fontFamily: "SFUI_Bold",
                                            }}
                                        >
                                            -
                                        </Text>
                                    </Pressable>
                                    <Pressable>
                                        <Text
                                            numberOfLines={1}
                                            adjustsFontSizeToFit={true}
                                            className="text-xl text-white"
                                            style={{
                                                fontFamily: "SFUI_Bold",
                                            }}
                                        >
                                            {shop.quantity}
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        onPress={() => {
                                            increaseQuantity(shop);
                                            setRandom(
                                                Math.floor(Math.random() * 999)
                                            );
                                        }}
                                    >
                                        <Text
                                            numberOfLines={1}
                                            adjustsFontSizeToFit={true}
                                            className="text-xl text-white"
                                            style={{
                                                fontFamily: "SFUI_Bold",
                                            }}
                                        >
                                            +
                                        </Text>
                                    </Pressable>
                                </View>
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate("Checkout", {
                                            id: shop.id,
                                            price: Math.floor(
                                                shop.quantity! * shop.price
                                            ),
                                        })
                                    }
                                    className="bg-green-500 active:bg-green-600 items-center p-2 rounded-md"
                                >
                                    <Text
                                        // numberOfLines={1}
                                        // adjustsFontSizeToFit={true}
                                        className="text-lg text-white"
                                        style={{
                                            fontFamily: "SFUI_Bold",
                                        }}
                                    >
                                        Checkout
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
