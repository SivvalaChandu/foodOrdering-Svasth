import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItems: {},
};

const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addmenu: (state, action) => {
      const menuItem = action.payload;
      state.menuItems[menuItem.id] = menuItem;
    },
  },
});

export const { addmenu } = MenuSlice.actions;
export default MenuSlice.reducer;
