import {SET_CRS_RESULT_DATA,
  GET_TYPE_FILTER_VALUE,GET_SOL_DET_CD_OPTIONS_CR,
  GET_STATUS_OPTIONS_CR,GET_SUB_STATUS_OPTIONS_CR,
  GET_SORT_ICONS_CR,GET_SORTED_COL_CR,
  GET_SORTED_COL_FILE,
  GET_TYPE_OPTIONS_CR,GET_SOLCD_OPTIONS_CR} from '../actions-types/actiontypes'
  const initialState =
   {
    CRsResult:[],
    typeFilter:[],
    sortIconsCR:[null,null,null,null,null,null,null,null,null],
    sortedColCR:[],
    sortedColFile:[]
    };
  const getCRsResultsReducer = (state = initialState.CRsResult, action) => {
  switch (action.type) {
    case SET_CRS_RESULT_DATA:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getTypeFilterValueReducer = (state = initialState.typeFilter, action) => {
  switch (action.type) {
    case GET_TYPE_FILTER_VALUE:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getTypeOptionsReducer = (state = initialState.typeFilter, action) => {
  switch (action.type) {
    case GET_TYPE_OPTIONS_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getSolCDOptionsReducer = (state = initialState.typeFilter, action) => {
  switch (action.type) {
    case GET_SOLCD_OPTIONS_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getSolDetCDOptionsReducer = (state = initialState.typeFilter, action) => {
  switch (action.type) {
    case GET_SOL_DET_CD_OPTIONS_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getStatusOptionsReducer = (state = initialState.typeFilter, action) => {
  switch (action.type) {
    case GET_STATUS_OPTIONS_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getSubStatusOptionsReducer = (state = initialState.typeFilter, action) => {
  switch (action.type) {
    case GET_SUB_STATUS_OPTIONS_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getSortIconsReducer = (state = initialState.sortIconsCR, action) => {
  switch (action.type) {
    case GET_SORT_ICONS_CR:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getSortedColReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_SORTED_COL_FILE:
        newState.sortedColFile = action.payload;
      return newState
      case GET_SORTED_COL_CR:
        newState.sortedColCR = action.payload;
      return newState
    default:
      return state;
  }
};

export  {getCRsResultsReducer,getTypeFilterValueReducer,
  getTypeOptionsReducer,getSolCDOptionsReducer,
  getSortIconsReducer,getSortedColReducer,
  getStatusOptionsReducer,getSubStatusOptionsReducer,
  getSolDetCDOptionsReducer};