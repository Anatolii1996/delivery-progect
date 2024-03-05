import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "./types";

const initialState = {
  success: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<IOrder>) => {
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
    },
    orderSuccess: (state, action:PayloadAction<undefined>) => {
      state.success = true;
    },
    resetForm: (state, action:PayloadAction<undefined> )=>{
      state.success = false;
    }
  },
});

export const { setOrder, orderSuccess, resetForm } = orderSlice.actions;
export default orderSlice.reducer;

export const GET_DALY_MENY = "orderSlice/getPossibleOrder";
export const getPossibleOrder = createAction(GET_DALY_MENY, () => ({
  payload: undefined,
}));
