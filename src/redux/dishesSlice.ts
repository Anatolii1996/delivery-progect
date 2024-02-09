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

    // createUserFailure: (state, action) => {
    //   // Этот экшн вызывается в саге в случае ошибки при отправке данных на бекенд
    //   state.message = "Нажаль замовлення не відправлено";
    //   console.error("Create user failed:", action.payload);
    // },
  },
});

export const GET_DISHES = "dishesSlice/getDishes";
export const getDishes = createAction(GET_DISHES, () => ({
  payload: undefined,
}));

export const { getFirstDishes, getSecondDishes, getSideDishes } = dishesSlice.actions;
export default dishesSlice.reducer;
