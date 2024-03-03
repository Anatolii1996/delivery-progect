import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDalyMenu, IChangeMenu } from "./types";
import moment from "moment";

const initialState: IDalyMenu = {
  menu1: {
    firstDish: {
      meal: "",
      image: "",
    },
    secondDish: {
      meal: "",
      image: "",
    },
    sideDish: {
      meal: "",
      image: "",
    },
    salad: {
      meal: "",
      image: "",
    },
    bread: {
      meal: "",
      image: "",
    },
  },
  menu2: {
    mainDish: {
      meal: "",
      image: "",
    },
    dessert: {
      meal: "",
      image: "",
    },
  },
  bigDessert: {
    nameDessert: {
      meal: "",
      image: "",
    },
  },
  date: "",
  _id: "",
};

const menuSlice = createSlice({
  name: "dalyMenu",
  initialState,
  reducers: {
    getDalyMenu: (state, action: PayloadAction<IDalyMenu>) => {
      // console.log(action.payload)
      return { ...state, ...action.payload };
    },

    getDateMenu: (state, action: PayloadAction<IDalyMenu>) => {
      state.date = action.payload.date;
    },

    changeDalyMenu: (state, action: PayloadAction<IChangeMenu>) => {
      // console.log(action.payload)
      state.bigDessert.nameDessert.meal = action.payload.bigDessert;
      state.menu1.firstDish.meal = action.payload.firstDish;
      state.menu1.secondDish.meal = action.payload.secondDish;
      state.menu1.sideDish.meal = action.payload.sideDish;
      state.menu1.salad.meal = action.payload.salad;
      state.menu2.mainDish.meal = action.payload.mainDish;
      state.menu2.dessert.meal = action.payload.dessert;
      state.date = moment().format("DD.MM.YYYY");
    },
  },
});

export const { getDalyMenu, changeDalyMenu, getDateMenu } = menuSlice.actions;
export default menuSlice.reducer;
