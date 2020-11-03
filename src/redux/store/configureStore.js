import { createStore, applyMiddleware, compose } from "redux";
// import { persistReducer } from "redux-persist";
// import LocalStorage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/root_reducer";
import rootSaga from "../sagas/root_saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [];

if (middleware.length > 0) {
  enhancers.push(applyMiddleware(...middleware));
}

const store = createStore(rootReducer, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
