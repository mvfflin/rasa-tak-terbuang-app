import shopsNear from "@/constants/shopNear";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, View, Image, Text, Pressable } from "react-native";

export default function ShopDetails({ route, navigation }: any) {
    const { id } = route.params;

    const findShop = shopsNear.find((shop) => shop.id == id);

    if (!findShop) return navigation.navigate("Main");

    return (
        <ScrollView className="bg-green-50 h-auto">
            <Image
                src={findShop.image}
                className="h-[400px] w-full rounded-t-md object-cover"
            />
            <View className="p-5">
                <Text
                    className="text-3xl text-green-900"
                    style={{ fontFamily: "Montserrat_Bold" }}
                >
                    {findShop.nama}
                </Text>
                <Text className="text-md text-emerald-950">
                    {findShop.address}
                </Text>
            </View>
            <View className="p-5">
                <Text
                    className="text-xl text-green-800"
                    style={{ fontFamily: "SFUI_Bold" }}
                >
                    Offers Available in {findShop.nama}
                </Text>
                <View
                    className="w-full opacity-10 bg-green-950 mt-1 mb-5"
                    style={{
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                    }}
                />
                <View className="flex-row flex-wrap gap-5">
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
                    <Pressable className="bg-white flex w-[165px] h-auto rounded-md active:bg-neutral-200">
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
                </View>
            </View>
        </ScrollView>
    );
}
