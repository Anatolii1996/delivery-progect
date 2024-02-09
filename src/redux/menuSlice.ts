import { createSlice } from "@reduxjs/toolkit";
import { IDalyMenu } from "./types";

const initialState: IDalyMenu = {
  menu1: {
    firstDish: "",
    secondDish: "",
    sideDish: "",
    salad: "",
    bread: "",
  },
  menu2: {
    mainDish: "",
    dessert: "",
  },
  dessert: "",
  date: "",
};

const menuSlice = createSlice({
  name: "dalyMenu",
  initialState,
  reducers: {
    getDalyMenu: (state, action) => {
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
    },
    // createUserSuccess: (state) => {
    //   // Этот экшн вызывается в саге при успешной отправке данных на бекенд
    //   state.message = "Замовлення успішно відправлено";
    // },
    // createUserFailure: (state, action) => {
    //   // Этот экшн вызывается в саге в случае ошибки при отправке данных на бекенд
    //   state.message = "Нажаль замовлення не відправлено";
    //   console.error("Create user failed:", action.payload);
    // },
  },
});

export const { getDalyMenu } =
menuSlice.actions;
export default menuSlice.reducer;
