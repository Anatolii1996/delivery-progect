import { takeEvery, put } from "redux-saga/effects";
import { IOrderState } from "../redux/types";
import { createDalyOrders } from "../redux/dalyOrdersSlice";
import axios from "axios";

function* setDalyOrdersWorker(): any {
  // console.log("setDalyOrdersWorker started");
  try {
    const payload = yield axios.get<IOrderState[]>(
      `${import.meta.env.VITE_SERVER_URL}/dalyOrders`
    );
    //  console.log(payload.data)
    yield put(createDalyOrders(payload.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* dalyOrdersSaga() {
  // console.log("dalyOrdersSaga started");
  yield takeEvery("dalyOrders/getDalyOrders", setDalyOrdersWorker);
}
