import rupiah from "@/constants/rupiah";
import shopsNear from "@/constants/shopNear";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "@/functions/CartReducer";
import { ScrollView, View, Image, Text, Pressable, Modal } from "react-native";
import shopNear from "@/types/shop";
import shopsTop from "@/constants/shopTop";

export default function ShopDetails({ route, navigation }: any) {
    const cart = useSelector((state: any) => state.cart.cart);
    const dispatch = useDispatch();
    // console.log(cart);
    const { id } = route.params;

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 3000);
    };

    const addItemToCart = (item: shopNear) => {
        dispatch(addToCart(item));
        toggleModal();
    };

    const findShop =
        shopsNear.find((shop) => shop.id == id) ||
        shopsTop.find((shop) => shop.id == id);

    if (!findShop) return navigation.navigate("Main");

    return (
        <ScrollView className="bg-green-100 h-auto">
            <Image
                src={findShop.image}
                className="h-[400px] w-full rounded-t-md object-cover"
            />
            <Pressable
                className="absolute p-3 pt-10"
                onPress={() => navigation.navigate("Main")}
            >
                <Ionicons name="arrow-back" size={30} color={"white"} />
            </Pressable>
            <View className="px-5 pt-5">
                <Text
                    className="text-3xl text-green-900"
                    style={{ fontFamily: "Montserrat_Bold" }}
                >
                    {findShop.nama}
                </Text>
            </View>
            <View className="pl-5 pt-2">
                <Text
                    className="text-2xl text-green-800"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    {`${rupiah(findShop.price)} / pack`}
                </Text>
                {/* <View className="flex-row flex-wrap gap-5">
                    <Pressable className="bg-white flex w-[165px] h-auto rounded-md active:bg-neutral-200">
                        <Image
                            src={
                                "https://images.unsplash.com/photo-1717451061024-5a74a0a112de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            className="h-[120px] w-full rounded-t-md object-cover"
                        />
                        <View className="pl-1 pb-2">
                            <Text
                                className="text-2xl text-green-900 p-2"
                                style={{ fontFamily: "SFUI_Bold" }}
                            >
                                {`${findShop.nama}`}
                            </Text>
                            <Text
                                className="text-sm text-green-900 pl-2"
                                style={{
                                    fontFamily: "SFUI_Regular",
                                }}
                            >
                                {`${findShop.offer}`}
                            </Text>
                        </View>
                    </Pressable>
                    {/* <Pressable className="bg-white flex w-[165px] h-auto rounded-md active:bg-neutral-200">
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
                                {`${findShop.nama}`}
                            </Text>
                            <Text
                                className="text-sm text-green-900 pl-2"
                                style={{
                                    fontFamily: "SFUI_Regular",
                                }}
                            >
                                {`${findShop.offer}`}
                            </Text>
                        </View>
                    </Pressable>
                </View> */}
            </View>
            <View className="p-5">
                <Text
                    className="text-2xl pb-2 text-green-800"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    Description
                </Text>
                <Text className="text-lg text-green-900">
                    {findShop.description}
                </Text>
            </View>
            <View className="p-5 flex flex-row justify-between">
                <Pressable className="bg-white p-3 px-5 pt-4 rounded-md">
                    <Ionicons name="heart-outline" />
                </Pressable>
                <Pressable
                    onPress={() => addItemToCart(findShop)}
                    disabled={modalVisible}
                    className="bg-green-400 p-3 px-16 rounded-md flex-row justify-between active:bg-green-500"
                >
                    <Ionicons name="cart-outline" size={20} color={"white"} />
                    <Text
                        className="text-xl px-3 text-white"
                        style={{ fontFamily: "SFUI_Bold" }}
                    >
                        Add to cart
                    </Text>
                </Pressable>
            </View>
            <Modal
                transparent={true}
                // presentationStyle="fullScreen"
                visible={modalVisible}
                // animated={true}
                animationType="fade"
            >
                <View className="bg-white top-0 fixed w-11/12 mx-auto flex-row rounded-lg h-16 justify-center space-x-5 items-center">
                    <Text className="text-2xl">Item ditambahkan ke cart!</Text>
                    <Ionicons name="checkmark" size={32} />
                </View>
            </Modal>
        </ScrollView>
    );
}
