/* eslint-disable */ 
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { IOrderState } from "./types";

const initialState:IOrderState[] = [];
const dalyOrdersSlice = createSlice({
  name: "dalyOrders",
  initialState,
  reducers: {
   
   createDalyOrders: (state, action:PayloadAction<IOrderState[]>) => {
    console.log(state)
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
      // console.log(action.payload)
      return action.payload; 
    },
  },
});

const GET_DALY_ORDERS = "dalyOrders/getDalyOrders";
export const getDalyOrders = createAction(GET_DALY_ORDERS, () => ({
  payload: undefined,
}));

export const { createDalyOrders } = dalyOrdersSlice.actions;
export default dalyOrdersSlice.reducer;
