import { createAction } from "@reduxjs/toolkit";

// const initialState = {};

// const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     getPossibleOrder: (state, action) => {
//       // Этот экшн вызывается из компонента для начала процесса создания пользователя
//     },
//   },
// });

// export const { getPossibleOrder } = orderSlice.actions;
// export default orderSlice.reducer;

export const GET_DALY_MENY = "orderSlice/getPossibleOrder";
export const getPossibleOrder = createAction(GET_DALY_MENY, () => ({
  payload: undefined,
}));
