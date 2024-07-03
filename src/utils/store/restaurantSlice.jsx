import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurentList",
    initialState:{
        list:[],
    },
    reducers : {
        addRestaurants: (state,action)=>{
            state.list.push(action.payload)
        }
    }
})

export const {addRestaurants} = restaurantSlice.actions;
export default restaurantSlice.reducer;