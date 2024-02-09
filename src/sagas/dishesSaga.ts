import { takeEvery, put, all, call } from "redux-saga/effects";
import {
  getFirstDishes,
  getSecondDishes,
  getSideDishes,
  getSalads,
  getDesserts
} from "../redux/dishesSlice";
import axios from "axios";

function* getFirstDishesWorker(): any {
  // console.log("getFirstDishesWorker started");

  try {
    const payload = yield axios.get<string[]>(
      `${import.meta.env.VITE_SERVER_URL}/first-dishes`
    );
    //  console.log(payload.data)
    yield put(getFirstDishes(payload.data));
  } catch (error) {
    console.log(error);
  }
}

function* getSecondDishesWorker(): any {
  // console.log("getSecondDishesWorker started");

  try {
    const payload = yield axios.get<string[]>(
      `${import.meta.env.VITE_SERVER_URL}/second-dishes`
    );
    //  console.log(payload.data)
    yield put(getSecondDishes(payload.data));
  } catch (error) {
    console.log(error);
  }
}

function* getSideDishesWorker(): any {
  // console.log("getSideDishesWorker started");

  try {
    const payload = yield axios.get<string[]>(
      `${import.meta.env.VITE_SERVER_URL}/side-dishes`
    );
    //  console.log(payload.data)
    yield put(getSideDishes(payload.data));
  } catch (error) {
    console.log(error);
  }
}

function* getSaladsWorker(): any {
  // console.log("getSaladsWorker started");

  try {
    const payload = yield axios.get<string[]>(
      `${import.meta.env.VITE_SERVER_URL}/salads`
    );
    //  console.log(payload.data)
    yield put(getSalads(payload.data));
  } catch (error) {
    console.log(error);
  }
}

function* getDesertsWorker(): any {
  // console.log("getDesertsWorker started");

  try {
    const payload = yield axios.get<string[]>(
      `${import.meta.env.VITE_SERVER_URL}/desserts`
    );
    //  console.log(payload.data)
    yield put(getDesserts(payload.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* dishesSaga() {
  // console.log("dishesSaga started");
  yield takeEvery("dishesSlice/getDishes", function* () {
    yield all([
      call(getFirstDishesWorker),
      call(getSecondDishesWorker),
      call(getSideDishesWorker),
      call(getSaladsWorker),
      call(getDesertsWorker),
    ]);
  });
}
