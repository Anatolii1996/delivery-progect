import { createSlice, createAction } from "@reduxjs/toolkit";
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
    getFirstDishes: (state, action) => {
      state.dishes.firstDishes = action.payload;
    },

    getSecondDishes: (state, action) => {
      state.dishes.secondDishes = action.payload;
    },

    getSideDishes: (state, action) => {
      state.dishes.sideDishes = action.payload;
    },

    getSalads: (state, action) => {
      state.dishes.salads = action.payload;
    },

    getDesserts: (state, action) => {
      state.dishes.desserts = action.payload;
    },
  },
});

export const GET_DISHES = "dishesSlice/getDishes";
export const getDishes = createAction(GET_DISHES, () => ({
  payload: undefined,
}));

export const { getFirstDishes, getSecondDishes, getSideDishes, getSalads, getDesserts } = dishesSlice.actions;
export default dishesSlice.reducer;
