import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderState } from "./types";

const initialState: IOrderState[] = [];
const dalyOrdersSlice = createSlice({
  name: "dalyOrders",
  initialState,
  reducers: {
    getDalyOrders: (state,) => {
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
    },
   createDalyOrders: (state, action: PayloadAction<IOrderState[]>) => {
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
      state = action.payload;
    },
  },
});

export const { createDalyOrders, getDalyOrders } = dalyOrdersSlice.actions;
export default dalyOrdersSlice.reducer;
