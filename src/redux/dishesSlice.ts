import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "./types";

const initialState: IMenu = {
  dishes: {
    firstDishes: [],
    secondDishes: [],
    sideDishes: [],
    salads: [],
    desserts: [],
  },
};

const dishesSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getFirstDishes: (state, action:PayloadAction<string[]>) => {
      state.dishes.firstDishes = action.payload;
    },

    getSecondDishes: (state, action:PayloadAction<string[]>) => {
      state.dishes.secondDishes = action.payload;
    },

    getSideDishes: (state, action:PayloadAction<string[]>) => {
      state.dishes.sideDishes = action.payload;
    },

    getSalads: (state, action:PayloadAction<string[]>) => {
      state.dishes.salads = action.payload;
    },

    getDesserts: (state, action:PayloadAction<string[]>) => {
      state.dishes.desserts = action.payload;
    },
  },
});

const GET_DISHES = "dishesSlice/getDishes";
export const getDishes = createAction(GET_DISHES, () => ({
  payload: undefined,
}));

export const { getFirstDishes, getSecondDishes, getSideDishes, getSalads, getDesserts } = dishesSlice.actions;
export default dishesSlice.reducer;
