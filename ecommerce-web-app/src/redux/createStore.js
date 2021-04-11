import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import createSagaMiddle from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddle();
const middlewares = [sagaMiddleware, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
sagaMiddleware.run(rootSaga);
