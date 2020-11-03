import { all } from "redux-saga/effects";
import searchBarSaga from "../sagas/cr_search_bar_saga";
import searchResultSaga from "../sagas/cr_search_result_saga";

function* rootSaga() {
  yield all([searchBarSaga(),searchResultSaga()]);
}

export default rootSaga;
