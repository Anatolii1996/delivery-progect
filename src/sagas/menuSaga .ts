import { takeEvery, put} from "redux-saga/effects";
import { IDalyMenu } from "../redux/types";
import { getDalyMenu } from "../redux/menuSlice";
import axios from "axios";

function* getMenuWorker(): any {
  console.log("getMenuWorker started");

  try {
    const payload = yield axios.get<IDalyMenu[]>(
      `${import.meta.env.VITE_SERVER_URL}/menu`
    );
    //  console.log(payload.data)
    yield put(getDalyMenu(payload.data[0]));
  } catch (error) {
    console.log(error);
  }
}

export default function* menuSaga() {
  console.log("menuSaga started");
  //срабатывает когда заходишь на /admin, потом изменить
  yield takeEvery("dishesSlice/getDishes", getMenuWorker);
}
