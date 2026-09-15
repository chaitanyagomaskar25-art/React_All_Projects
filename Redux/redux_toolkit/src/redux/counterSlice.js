import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state)=>{
          return state+1
        },
        decrement: (state)=>{
           return state-1
        },
        increaseByFive : (state, action)=>{
            return state+action.payload
        },
        increaseByTen: (state, action)=>{
            return state+action.payload
        },
        decreseByFive: (state, action)=>{
            return state-action.payload
        },
        decreaseByTen: (state, action)=>{
            return state - action.payload
        }
    }
})


export const  {increment, decrement,decreaseByTen,decreseByFive, increaseByFive, increaseByTen} = counterSlice.actions
export default counterSlice.reducer
