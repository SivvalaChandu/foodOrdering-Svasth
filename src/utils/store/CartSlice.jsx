import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    slogens: ["Navigating Miles, Delivering Smiles",
    "Delivery So Fast, Your Neighbors Will Be Jealous",
    "If We're Late, Your Next Delivery is Free (Just Kidding!)",
    "Our Deliveries Are So Quick, We Leave Sonic in the Dust",
    "Making Deliveries Fun, One Joke at a Time",
    "We Put the 'Fast' in 'Package'!",
    "We Make Deliveries as Cute as a Button",
    "Stay Cool and Let Us Handle the Delivery",
    "Making Deliveries as Cool as Ice"],
  },
  reducers: {
    addItem: (state, action) => {
      let index = state.items.findIndex((item) => item.id == action.payload.id);
      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      let index = state.items.findIndex((item) => item.id == action.payload);
      if (index >= 0 && state.items[index].quantity>=2) {
        state.items[index].quantity -= 1;
      } else {
        state.items.splice(index,1);
      }
    },
    clearCart: (state) => {
      state.items.length=0;
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
