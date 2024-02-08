/* eslint-disable */
import { all, call } from "@redux-saga/core/effects";
import userSaga from "./userSaga";
import dishesSaga from "./dishesSaga";

const sagasList = [userSaga, dishesSaga];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
