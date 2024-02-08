import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import dishesReducer from "./dishesSlice";

import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    createUser: userReducer,
    menu: dishesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
