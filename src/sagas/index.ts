/* eslint-disable */
import { all, call } from "@redux-saga/core/effects";
import userSaga from "./userSaga";
import dishesSaga from "./dishesSaga";
import menuSaga from "./menuSaga ";
import orderSaga from "./orderSaga";

const sagasList = [userSaga, dishesSaga, menuSaga, orderSaga];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
