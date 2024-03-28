/* eslint-disable */
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "./types";

const initialState = {
  success: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {

    orderSuccess: (state, action: PayloadAction<undefined>) => {
      state.success = true;
      console.log(action);
    },
    resetState: (state, action: PayloadAction<undefined>) => {
      state.success = false;
      console.log(action);
    },
  },
});

export const { orderSuccess, resetState } = orderSlice.actions;
export default orderSlice.reducer;

const GET_DALY_MENY = "orderSlice/getPossibleOrder";
export const getPossibleOrder = createAction(GET_DALY_MENY, () => ({
  payload: undefined,
}));

const SET_ORDER = "order/setOrder";
export const setOrder = createAction<IOrder>(SET_ORDER);
