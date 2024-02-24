import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserMessage, IUserState } from "./types";

const initialState: IUserMessage = {
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action:PayloadAction<IUserState>) => {
      // Этот экшн вызывается из компонента для начала процесса создания пользователя
    },
    createUserSuccess: (state) => {
      // Этот экшн вызывается в саге при успешной отправке данных на бекенд
      state.message = "Користувач успішно створений";
    },
    createUserFailure: (state, action:PayloadAction<string>) => {
      // Этот экшн вызывается в саге в случае ошибки при отправке данных на бекенд
      state.message = "Нажаль користувач не створений";
      console.error("Create user failed:", action.payload);
    },
  },
});

export const { createUser, createUserSuccess, createUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
