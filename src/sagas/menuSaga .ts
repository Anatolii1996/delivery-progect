import { takeEvery, put, all, call } from "redux-saga/effects";


function* getMenuWorker(): any {
  console.log("getMenuWorker started");

  // try {
  //   const payload = yield axios.get<string[]>(
  //     `${import.meta.env.VITE_SERVER_URL}/desserts`
  //   );
  //   //  console.log(payload.data)
  //   yield put(getDesserts(payload.data));
  // } catch (error) {
  //   console.log(error);
  // }
}

export default function* menuSaga() {
  console.log("menuSaga started");
  yield takeEvery("dishesSlice/getDishes", getMenuWorker);
}
