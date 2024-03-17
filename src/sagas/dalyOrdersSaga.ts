import { takeEvery, put } from "redux-saga/effects";
import { IOrderAction } from "./types";
import { orderSuccess } from "../redux/orderSlice";
import axios from "axios";

function* setDalyOrdersWorker(): any {
  console.log("setDalyOrdersWorker started");
//   // console.log(action.payload)
//   try {
//     const config = {
//       method: "post",
//       url: `${import.meta.env.VITE_SERVER_URL}/new-order`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: JSON.stringify(action.payload), // Преобразуйте данные в JSON-строку
//     };
//     yield axios(config);
//     yield put(orderSuccess());
//   } catch (error) {
//     console.log(error);
//   }
}

export default function* dalyOrdersSaga() {
  console.log("dalyOrdersSaga started");
  yield takeEvery("dalyOrders/getDalyOrders", setDalyOrdersWorker);
}
