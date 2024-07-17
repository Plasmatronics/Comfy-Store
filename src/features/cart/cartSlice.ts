import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type CartItem, type CartState } from "@/utils";
import { toast } from "@/components/ui/use-toast";

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

function getCartFromLocalStorage(): CartState {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : defaultState;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem:()={},
    clearCart:()={},
    editItem:()={},
    removeItem:()={},
    calculateTotals:()={}
  },
});

export const {addItem, clearCart, editItem, removeItem, calculateTotals}=cartSlice.actions

export default cartSlice.reducer;
