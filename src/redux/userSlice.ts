import { createSlice } from "@reduxjs/toolkit";
import { IUserMessage } from "./types";

const initialState: IUserMessage = {
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
    },
    createUserSuccess: (state) => {
      // Этот экшн вызывается в саге при успешной отправке данных на бекенд
      state.message = "Замовлення успішно відправлено";
    },
    createUserFailure: (state, action) => {
      // Этот экшн вызывается в саге в случае ошибки при отправке данных на бекенд
      state.message = "Нажаль замовлення не відправлено";
      console.error("Create user failed:", action.payload);
    },
  },
});

export const { createUser, createUserSuccess, createUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
