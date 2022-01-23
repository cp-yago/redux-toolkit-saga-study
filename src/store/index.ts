import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import catReducer from "./cat/catState";
import catSaga from "./cat/catSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware: [saga],
});

saga.run(catSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
