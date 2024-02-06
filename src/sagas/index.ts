/* eslint-disable */
import { all, call } from "@redux-saga/core/effects";
import userSaga from "./userSaga";

const sagasList = [userSaga];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
