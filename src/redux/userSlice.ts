/* eslint-disable */ 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserStore, IUserState } from "./types";
import { FormValues } from "../pages/EnterPage/types";

const initialState: IUserStore = {
  status: undefined,
  userInfo: {
    name: "",
    tel: "",
    address: "",
    email: "",
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action:PayloadAction<IUserState>) => {

      console.log(state)
      console.log(action)
    },
    createUserSuccess: (state, action:PayloadAction<undefined>) => {
      console.log(action)

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
    },
    loginUser: (state, action:PayloadAction<FormValues>) => {
      console.log(action)
      console.log(state)
    },
    addUserInfo: (state, action)=>{
     state.userInfo.name=action.payload.name;
     state.userInfo.address=action.payload.address;
     state.userInfo.tel=action.payload.tel;
     
    },
    addloginUserInfo: (state, action)=>{
     state.userInfo.name=action.payload.name;
     state.userInfo.address=action.payload.address;
     state.userInfo.tel=action.payload.tel;
     state.userInfo.email=action.payload.email;

    },
    checkUserToken: (state, action:PayloadAction<string|undefined>) => {
      console.log(state)
      console.log(action)
    }

  },
});

export const { createUser, createUserSuccess, createUserFailure, removeUserStatus, loginUser, addUserInfo, addloginUserInfo, checkUserToken } =
  userSlice.actions;
export default userSlice.reducer;
