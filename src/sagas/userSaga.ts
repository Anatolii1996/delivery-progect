import { takeEvery, put } from "redux-saga/effects";
import { createUserSuccess, createUserFailure } from "../redux/userSlice";
import { IUserAction } from "./types";
import axios from "axios";

function* createuserWorker(action:IUserAction): any {
  // console.log("createuserWorker started");
  console.log(action.payload)

  try {
    const config = {
      method: "post",
      url: `${import.meta.env.VITE_SERVER_URL}/new-user`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(action.payload), // Преобразуйте данные в JSON-строку
    };
    yield axios(config).catch((error) => {
      console.log(error);
    });

    // Если успешно, диспатчим экшн createUserSuccess
    yield put(createUserSuccess());
  } catch (error) {
    // В случае ошибки, диспатчим экшн createUserFailure
    yield put(createUserFailure(error));
  }
}

export default function* userSaga() {
  // console.log("userSaga started");
  // console.log(import.meta.env.VITE_SERVER_URL);

  yield takeEvery("user/createUser", createuserWorker);
}
