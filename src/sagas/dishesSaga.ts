import { takeEvery, put } from "redux-saga/effects";
import { getFirstDishes } from "../redux/dishesSlice"; 
import axios from "axios";

function* getFirstDishesWorker(): any {
  console.log("getFirstDishesWorker started");

  try {
     const payload = yield axios.get<string[]>(`${import.meta.env.VITE_SERVER_URL}/first-dishes`);
    //  console.log(payload.data)
    yield put(getFirstDishes(payload.data))
  } catch (error) {
   
  }
}

export default function* dishesSaga() {
  console.log("dishesSaga started");
  yield takeEvery("dishesSlice/getDishes", getFirstDishesWorker);
}
