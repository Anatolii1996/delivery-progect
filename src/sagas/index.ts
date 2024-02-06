/* eslint-disable */
import { all, call } from "@redux-saga/core/effects";
import firstLoadingSaga from "./firstLoadingSaga";

const sagasList = [firstLoadingSaga];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
