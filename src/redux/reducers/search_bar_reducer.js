import {SET_SOLUTION_CR_INDEX,GET_CR_NUMBER,GET_ACTIVE_KEY,
  SET_KEYWORDS_BY_CR,GET_TAGS,SET_LOADER,GET_LOADER,
  SET_UPDATED_KEYWORDS,
  SET_SUGGESTED_KEYWORDS,GET_COLLAPSE,GET_INTRODUCTORY_CHECKBOX,
  GET_COLLAPSE_EXPAND,GET_INTRODUCTORY_CR} from '../actions-types/actiontypes'
const initialState =
 {
    counter: 1, 
    customAsyncData: "" ,
    emp:[],
    solutionCRIndex:[],
    selectedSolutionCR:[],
    selectedCRType:[],
    cr_num:'',
    activeKey:'/crSearch',
    CRKeywords:[],
    tags:[],
    loader:false,
    suggestions:[],
    collapse:false,
    collapseBox:false,
    intoductoryCR:'',
    intoductoryCheckBox:false
  };
const counter = (state = initialState.counter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const customAsyncData = (state = initialState.customAsyncData, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
const getAllEmp = (state = initialState.emp, action) => {
  switch (action.type) {
    case "SET_EMP_DATA":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
const getAllSolutionCRIndexReducer = (state = initialState.solutionCRIndex, action) => {
  switch (action.type) {
    case SET_SOLUTION_CR_INDEX:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
const getselectedSolCRReducer = (state = initialState.selectedSolutionCR, action) => {
  switch (action.type) {
    case "SELECTED_SOL_CR":
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getselectedCRTypeReducer = (state = initialState.selectedCRType, action) => {
  switch (action.type) {
    case "SELECTED_CR_TYPE":
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getCRNumberReducer = (state = initialState.cr_num, action) => {
  switch (action.type) {
    case GET_CR_NUMBER:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getActivationKeyReducer = (state = initialState.activeKey, action) => {
  switch (action.type) {
    case GET_ACTIVE_KEY:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getKeywordsByCRReducer = (state = initialState.CRKeywords, action) => {
  switch (action.type) {
    case SET_KEYWORDS_BY_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getTagsReducer = (state = initialState.tags, action) => {
  switch (action.type) {
    case GET_TAGS:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getLoaderReducer = (state = initialState.loader, action) => {
  switch (action.type) {
    case GET_LOADER:
      return !state;
    default:
      return state;
  }
};
const getSuggestedKeywordsReducer = (state = initialState.suggestions, action) => {
  switch (action.type) {
    case SET_SUGGESTED_KEYWORDS:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getCollapseReducer = (state = initialState.collapse, action) => {
  switch (action.type) {
    case GET_COLLAPSE:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getCollapseExpandReducer = (state = initialState.collapseBox, action) => {
  switch (action.type) {
    case GET_COLLAPSE_EXPAND:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getIntroductoryCRReducer = (state = initialState.intoductoryCR, action) => {
  switch (action.type) {
    case GET_INTRODUCTORY_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getIntroductoryChexkBoxReducer = (state = initialState.intoductoryCheckBox, action) => {
  switch (action.type) {
    case GET_INTRODUCTORY_CHECKBOX:
      return !state;
    default:
      return state;
  }
};
const getIntroductoryCRUpdateKeywordsReducer = (state = initialState.tags, action) => {
  switch (action.type) {
    case SET_UPDATED_KEYWORDS:
      return { ...state, payload: action.prevData.concat(action.payload).filter((item, index) => action.prevData.concat(action.payload).indexOf(item) === index)}
    default:
      return state;
  }
};
export  {counter,customAsyncData,getAllEmp,
  getAllSolutionCRIndexReducer,getselectedSolCRReducer,getselectedCRTypeReducer,
  getCRNumberReducer,getActivationKeyReducer,getKeywordsByCRReducer,
  getTagsReducer,getLoaderReducer,getSuggestedKeywordsReducer,
  getIntroductoryChexkBoxReducer,getIntroductoryCRUpdateKeywordsReducer,
  getCollapseReducer,getCollapseExpandReducer,getIntroductoryCRReducer};

