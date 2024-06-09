import CheckoutScreen from "@/components/cart/checkout";
import MainCartScreen from "@/components/cart/main";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();

export default function CartScreen() {
    return (
        <SafeAreaView className="bg-green-100 h-full">
            <Stack.Navigator
                initialRouteName="MainCart"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="MainCart" component={MainCartScreen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}
