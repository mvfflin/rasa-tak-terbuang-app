import shopNear from "@/types/shop";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart: any = state.cart.find(
                (item: shopNear) => item.id == action.payload.id
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const removeFromCart = state.cart.filter(
                (item: shopNear) => item.id !== action.payload.id
            );
            state.cart = removeFromCart;
        },
        incrementQuantity: (state, action) => {
            let itemInCart: any = state.cart.find(
                (item: shopNear) => item.id == action.payload.id
            );
            itemInCart.quantity++;
        },
        decrementQuantity: (state, action) => {
            let itemInCart: any = state.cart.find(
                (item: shopNear) => item.id == action.payload.id
            );
            if (itemInCart.quantity == 1) {
                const removeFromCart = state.cart.filter(
                    (item: shopNear) => item.id !== action.payload.id
                );
                state.cart = removeFromCart;
            } else {
                itemInCart.quantity--;
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
