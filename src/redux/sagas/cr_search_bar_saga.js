import { put, takeLatest, all } from "redux-saga/effects";
import qs from 'qs';
import {GET_SOLUTION_CR_INDEX,SET_SOLUTION_CR_INDEX,
  SET_KEYWORDS_BY_CR,GET_KEYWORDS_BY_CR,GET_TAGS,
  GET_SUGGESTED_KEYWORDS,GET_COLLAPSE,GET_LOADER,
  SET_SUGGESTED_KEYWORDS,GET_UPDATED_KEYWORDS,
  GET_COLLAPSE_EXPAND,SET_UPDATED_KEYWORDS,
  GET_INTRODUCTORY_CR} from '../actions-types/actiontypes'
import axios from "axios";
const runOurAction = function* () {
  let remoteData;
  yield axios.get("https://httpbin.org/json").then((resp) => {
    remoteData = resp.data;
  });
  yield put({ type: "SET_DATA", payload: remoteData });
};
function* getAsyncDataWatcher() {
  yield takeLatest("GET_ASYNC_DATA", runOurAction);
}

const emprunOurAction = function* () {
  let empData;
  yield axios.get("https://jsonplaceholder.typicode.com/todos/2").then((resp) => {
    empData = resp.data;
  });
  yield put({ type: "SET_EMP_DATA", payload: empData });
};
function* getEmpDataWatcher() {
  yield takeLatest("GET_EMP_DATA", emprunOurAction);
}
//new actions actual ones
const getSolCRIndexrunOurAction = function* () {
  let solCRIndex=[],i=0;
  yield axios.get("http://localhost:6849/access/getAllSolutionCRIndex").then((resp) => {
    resp.data.aggregations.solutions.buckets.map(item=>{
      solCRIndex.push({id:i,name:item.key});
      i++;
    })
    solCRIndex = solCRIndex;
  });
  yield put({ type: SET_SOLUTION_CR_INDEX, payload: solCRIndex });
};
function* getAllSolutionCRIndexActionDataWatcher() {
  yield takeLatest(GET_SOLUTION_CR_INDEX, getSolCRIndexrunOurAction);
}

const getKeywordsByCRrunOurAction = function* (data) {
  let keywords=[],introduced_by_cr_numbers='';
  const cr_data = qs.stringify({
    cr_num: data.payload
});
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Authorization' : 'Bearer 677c41b17636346b903912918e3aa934c5f5595b'
};
  yield axios.post(
    'https://myjarvis.cerner.com/api/get_cr_keywords',
    cr_data,
    headers
  ).then((resp) => {
    let result=JSON.parse(resp.data);
    introduced_by_cr_numbers=result.introduced_by_cr_numbers
    if(result.keyword.length>0){
      result.keyword.map(item=>{
        keywords.push(item)
      })
    }
  });
  yield put({ type: SET_KEYWORDS_BY_CR, payload: keywords });
  yield put({ type: GET_TAGS, payload: keywords });
  yield put({ type: GET_COLLAPSE, payload:true });
  yield put({ type: GET_COLLAPSE_EXPAND, payload:true });
  yield put({ type: GET_INTRODUCTORY_CR, payload:introduced_by_cr_numbers.trim() });
  //yield put({ type: GET_LOADER, payload: false });
};
function* getKeywordsByCRActionDataWatcher(data) {
  yield takeLatest(GET_KEYWORDS_BY_CR, getKeywordsByCRrunOurAction);
}

const getSuggestedKeywordsrunOurAction = function* (e) {
  let suggestions=[];
  yield axios.post('http://localhost:6849/access/keywordSuggestion', {
    keyword: e.payload
  }).then((resp) => {
    resp.data.aggregations.suggested_terms.buckets.map(item=>{
      suggestions.push(item.key)
    })
  });
  yield put({ type: SET_SUGGESTED_KEYWORDS, payload: suggestions });
};
function* getSuggestedKeywordsActionDataWatcher(data) {
  yield takeLatest(GET_SUGGESTED_KEYWORDS, getSuggestedKeywordsrunOurAction);
}

const getIntroductoryCRKeywordUpdaterunOurAction = function* (data) {
  if(data.flag=='1'){
  let keywords=[],introduced_by_cr_numbers='';
  const cr_data = qs.stringify({
    cr_num: data.payload
});
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Authorization' : 'Bearer 677c41b17636346b903912918e3aa934c5f5595b'
};
  yield axios.post(
    'https://myjarvis.cerner.com/api/get_cr_keywords',
    cr_data,
    headers
  ).then((resp) => {
    let result=JSON.parse(resp.data);
    introduced_by_cr_numbers=result.introduced_by_cr_numbers
    if(result.keyword.length>0){
      result.keyword.map(item=>{
        keywords.push(item)
      })
    }
  });
  yield put({ type: SET_UPDATED_KEYWORDS, payload: keywords ,prevData:data.prevData});
  yield put({ type: GET_LOADER, payload: false });
  yield put({ type: GET_TAGS, payload: keywords });
  yield put({ type: GET_COLLAPSE, payload:true });
  yield put({ type: GET_COLLAPSE_EXPAND, payload:true });
  yield put({ type: GET_INTRODUCTORY_CR, payload:introduced_by_cr_numbers.trim() });
}else{
  console.log("saga else= ",data.flag)
  yield put({ type: SET_UPDATED_KEYWORDS, payload: [] ,prevData:[]});
}
};
function* getIntroductoryCRUpdateKeywordsDataWatcher(data,prevData,flag) {
  yield takeLatest(GET_UPDATED_KEYWORDS, getIntroductoryCRKeywordUpdaterunOurAction);
}

export default function* rootSaga() {
  yield all([getAsyncDataWatcher(),getEmpDataWatcher(),getAllSolutionCRIndexActionDataWatcher(),
    getIntroductoryCRUpdateKeywordsDataWatcher(),
    getKeywordsByCRActionDataWatcher(),getSuggestedKeywordsActionDataWatcher()]);
}
