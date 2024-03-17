import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserMessage, IUserState } from "./types";

const initialState: IUserMessage = {
  status: undefined,
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
      state.status = true;
    },
    createUserFailure: (state, action:PayloadAction<string>) => {
      // Этот экшн вызывается в саге в случае ошибки при отправке данных на бекенд
      state.status = false;
      console.error("Create user failed:", action.payload);
    },
    removeUserStatus: (state) => {
      state.status = undefined;
    }

  },
});

export const { createUser, createUserSuccess, createUserFailure, removeUserStatus } =
  userSlice.actions;
export default userSlice.reducer;
