import { createSlice } from "@reduxjs/toolkit";
import { IDalyMenu } from "./types";
import moment from "moment";

const initialState: IDalyMenu = {
  menu1: {
    firstDish:{
      meal:"",
      image:"",
    } ,
    secondDish: {
      meal:"",
      image:"",
    } ,
    sideDish: {
      meal:"",
      image:"",
    } ,
    salad: {
      meal:"",
      image:"",
    } ,
    bread: {
      meal:"",
      image:"",
    } ,
  },
  menu2: {
    mainDish: {
      meal:"",
      image:"",
    } ,
    dessert: {
      meal:"",
      image:"",
    } ,
  },
  bigDessert: {
      meal:"",
      image:"",
    } ,
  date: "",
  _id: "",
};

const menuSlice = createSlice({
  name: "dalyMenu",
  initialState,
  reducers: {
    getDalyMenu: (state, action) => {
      // console.log(action.payload)
      return { ...state, ...action.payload };
    },

    changeDalyMenu: (state, action) => {
      state.bigDessert.meal = action.payload.bigDessert;
      state.menu1.firstDish.meal = action.payload.firstDish;
      state.menu1.secondDish.meal = action.payload.secondDish;
      state.menu1.sideDish.meal = action.payload.sideDish;
      state.menu1.salad.meal = action.payload.salad;
      state.menu2.mainDish.meal = action.payload.mainDish;
      state.menu2.dessert.meal = action.payload.dessert;
      state.date = moment().format("DD.MM.YYYY");
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

export const { getDalyMenu, changeDalyMenu } = menuSlice.actions;
export default menuSlice.reducer;
