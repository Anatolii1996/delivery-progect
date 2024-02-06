import { takeEvery, call, put } from "redux-saga/effects";
import { createUserSuccess, createUserFailure } from "../redux/userSlice";
import { IUserAction } from "./types";

function* createuserWorker(action:IUserAction): any {
  console.log("createuserWorker started");
  console.log(action.payload)

  try {
    // Вызовите API для отправки данных на бекенд
    // yield call(api.createUser, action.payload);

    // Если успешно, диспатчим экшн createUserSuccess
    yield put(createUserSuccess());
  } catch (error) {
    // В случае ошибки, диспатчим экшн createUserFailure
    yield put(createUserFailure(error));
  }
}

export default function* userSaga() {
  console.log("userSaga started");

  yield takeEvery("user/createUser", createuserWorker);
}
