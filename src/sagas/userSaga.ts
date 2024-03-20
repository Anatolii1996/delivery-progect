import { takeEvery, put } from "redux-saga/effects";
import { createUserSuccess, createUserFailure, addUserInfo, addloginUserInfo } from "../redux/userSlice";
import { IUserAction, ILoginAction } from "./types";
import axios from "axios";

function* createuserWorker(action: IUserAction): any {
  // console.log("createuserWorker started");
  // console.log(action.payload)

  try {
    const config = {
      method: "post",
      url: `${import.meta.env.VITE_SERVER_URL}/new-user`,
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
      data: JSON.stringify(action.payload), // Преобразуйте данные в JSON-строку
    };
    const response = yield axios(config);
    // console.log(response.data.user)
    localStorage.setItem("token", response.data.accessToken);
    yield put(addUserInfo(response.data.user))

    if (response.status === 201) {
      // Если успешно, диспатчим экшн createUserSuccess
      yield put(createUserSuccess());
    } else {
      // Если сервер не отвечает успешно, диспатчим экшн createUserFailure
      yield put(
        createUserFailure(`Server responded with status: ${response.status}`)
      );
    }
  } catch (error) {
    // В случае ошибки, диспатчим экшн createUserFailure
    yield put(createUserFailure(`${error}`));
  }
}

function* loginUserWorker(action: ILoginAction): any {
  // console.log("loginUserWorker started");
  // console.log(action.payload)

  try {
    const config = {
      method: "post",
      url: `${import.meta.env.VITE_SERVER_URL}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: JSON.stringify(action.payload), // Преобразуйте данные в JSON-строку
    };
    const response = yield axios(config);
    // console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    yield put(addloginUserInfo(response.data.user))

    //   if (response.status === 201) {
    //     // Если успешно, диспатчим экшн createUserSuccess
    //     yield put(createUserSuccess());
    //   } else {
    //     // Если сервер не отвечает успешно, диспатчим экшн createUserFailure
    //     yield put(createUserFailure(`Server responded with status: ${response.status}`));
    //   }
  } catch (error) {
    // В случае ошибки, диспатчим экшн createUserFailure
    console.log(error);
  }
}

export default function* userSaga() {
  // console.log("userSaga started");
  // console.log(import.meta.env.VITE_SERVER_URL);

  yield takeEvery("user/createUser", createuserWorker);
  yield takeEvery("user/loginUser", loginUserWorker);
}
