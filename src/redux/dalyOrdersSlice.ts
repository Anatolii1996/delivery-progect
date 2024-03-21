/* eslint-disable */ 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderState } from "./types";

const initialState:IOrderState[] = [];
const dalyOrdersSlice = createSlice({
  name: "dalyOrders",
  initialState,
  reducers: {
    getDalyOrders: (state, action:PayloadAction<undefined>) => {
      console.log(state)
      console.log(action)
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
    },
   createDalyOrders: (state, action:PayloadAction<IOrderState[]>) => {
    console.log(state)
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
      // console.log(action.payload)
      return action.payload; 
    },
  },
});

export const { createDalyOrders, getDalyOrders } = dalyOrdersSlice.actions;
export default dalyOrdersSlice.reducer;
