import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "./types";

const initialState = {};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<IOrder>) => {
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;

export const GET_DALY_MENY = "orderSlice/getPossibleOrder";
export const getPossibleOrder = createAction(GET_DALY_MENY, () => ({
  payload: undefined,
}));
