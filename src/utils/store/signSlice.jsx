import { createSlice } from "@reduxjs/toolkit"

const signSlice = createSlice({
    name: "sign",
    initialState:{
        sign:false,
    },
    reducers: {
        showsignpage: (state)=>{
            state.sign= true
        },
        hidesignpage: (state)=>{
            state.sign = false
        }
    }
})
export const {showsignpage, hidesignpage} = signSlice.actions
export default signSlice.reducer