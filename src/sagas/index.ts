/* eslint-disable */
import { all, call } from "@redux-saga/core/effects";
import userSaga from "./userSaga";
import dishesSaga from "./dishesSaga";
import menuSaga from "./menuSaga ";
import orderSaga from "./orderSaga";
import dalyOrdersSaga from "./dalyOrdersSaga";


const sagasList = [userSaga, dishesSaga, menuSaga, orderSaga, dalyOrdersSaga];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
