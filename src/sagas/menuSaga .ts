import { takeEvery, put} from "redux-saga/effects";
import { IDalyMenu } from "../redux/types";
import {IDalyAction} from "./types"
import { getDateMenu, getDalyMenu } from "../redux/menuSlice";
import axios from "axios";

function* getDateWorker(): any {
  // console.log("getMenuWorker started");

  try {
    const payload = yield axios.get<IDalyMenu[]>(
      `${import.meta.env.VITE_SERVER_URL}/menu`
    );
    //  console.log(payload.data)
    yield put(getDateMenu(payload.data[0]));
  } catch (error) {
    console.log(error);
  }
}

function* getMenuWorker(): any {
  // console.log("getMenuWorker started");

  try {
    const payload = yield axios.get<IDalyMenu[]>(
      `${import.meta.env.VITE_SERVER_URL}/menu`
    );
    //  console.log(payload.data)
    yield put(getDalyMenu(payload.data[0]));
  } catch (error) {
    console.log(error);
  }
}

function* changeMenuWorker(action:IDalyAction): any {
  console.log("changeMenuWorker started");
// console.log(action.payload)
  try {
    const config = {
      method: "patch",
      url: `${import.meta.env.VITE_SERVER_URL}/change-dalyMenu`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(action.payload), // Преобразуйте данные в JSON-строку
    };
    yield axios(config);

    //   //  console.log(payload.data)
  //   yield put(getDalyMenu(payload.data[0]));
  } catch (error) {
    console.log(error);
  }
}


export default function* menuSaga() {
  // console.log("menuSaga started");
  yield takeEvery("dishesSlice/getDishes", getDateWorker);
  yield takeEvery("orderSlice/getPossibleOrder", getMenuWorker);
  yield takeEvery("dalyMenu/changeDalyMenu", changeMenuWorker);
}
