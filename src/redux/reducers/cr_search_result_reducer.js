import {SET_CRS_RESULT_DATA,
  GET_TYPE_FILTER_CR,GET_SOL_DET_CD_OPTIONS_CR,
  GET_STATUS_OPTIONS_CR,GET_SUB_STATUS_OPTIONS_CR,
  GET_SORT_ICONS_CR,GET_SORTED_COL_CR,
  GET_SUB_STATUS_OPTIONS_FILE,
  GET_SUB_STATUS_FILTER_FILE,GET_SUB_STATUS_FILTER_CR,
  GET_SOL_DET_CD_OPTIONS_FILE,GET_STATUS_OPTIONS_FILE,
  GET_SOL_DET_CD_FILTER_CR,GET_SOL_DET_CD_FILTER_FILE,
  GET_STATUS_FILTER_CR,GET_STATUS_FILTER_FILE,
  GET_SOL_CD_FILTER_CR,GET_SOL_CD_FILTER_FILE,
  GET_TYPE_FILTER_FILE,GET_SOLCD_OPTIONS_FILE,
  GET_SORTED_COL_FILE,GET_TYPE_OPTIONS_FILE,
  GET_TYPE_OPTIONS_CR,GET_SOLCD_OPTIONS_CR} from '../actions-types/actiontypes'
  const initialState =
   {
    CRsResult:[],
    typeFilter:[],
    typeFilterCR:[],
    typeFilterFile:[],
    sortIconsCR:[null,null,null,null,null,null,null,null,null],
    sortedColCR:[{id: "score",desc:true}],
    sortedColFile:[{id: "Open_Date",desc: true}],
    typeOptionsCR:[],
    typeOptionsFile:[],
    solCDOptionsFile:[],
    solCDOptionsCR:[],
    solCDFilterCR:[],
    solCDFilterFile:[],
    solDetCDOptionsFile:[],
    solDetCDOptionsCR:[],
    solDetCDFilterCR:[],
    solDetCDFilterFile:[],
    statusOptionsFile:[],
    statusOptionsCR:[],
    statusFilterCR:[],
    statusFilterFile:[],
    subStatusOptionsCR:[],
    subStatusOptionsFile:[],
    subStatusFilterCR:[],
    subStatusFilterFile:[],
    };
  const getCRsResultsReducer = (state = initialState.CRsResult, action) => {
  switch (action.type) {
    case SET_CRS_RESULT_DATA:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};
const getTypeFilterValueReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_TYPE_FILTER_CR:
        newState.typeFilterCR = action.payload;
      return newState
      case GET_TYPE_FILTER_FILE:
        newState.typeFilterFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getSolCDFilterValueReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_SOL_CD_FILTER_CR:
        console.log("reducer== ",action)
        newState.solCDFilterCR = action.payload;
      return newState
      case GET_SOL_CD_FILTER_FILE:
        newState.solCDFilterFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getSolDetCDFilterValueReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_SOL_DET_CD_FILTER_CR:
        newState.solDetCDFilterCR = action.payload;
      return newState
      case GET_SOL_DET_CD_FILTER_FILE:
        newState.solDetCDFilterFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getStatusFilterValueReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_STATUS_FILTER_CR:
        newState.statusFilterCR = action.payload;
      return newState
      case GET_STATUS_FILTER_FILE:
        newState.statusFilterFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getSubStatusFilterValueReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_SUB_STATUS_FILTER_CR:
        newState.subStatusFilterCR = action.payload;
      return newState
      case GET_SUB_STATUS_FILTER_FILE:
        newState.subStatusFilterFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getTypeOptionsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_TYPE_OPTIONS_CR:
        newState.typeOptionsCR = action.payload;
      return newState
      case GET_TYPE_OPTIONS_FILE:
        newState.typeOptionsFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getSolCDOptionsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_SOLCD_OPTIONS_CR:
        newState.solCDOptionsCR = action.payload;
      return newState
      case GET_SOLCD_OPTIONS_FILE:
        newState.solCDOptionsFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getSolDetCDOptionsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_SOL_DET_CD_OPTIONS_CR:
        newState.solDetCDOptionsCR = action.payload;
      return newState
      case GET_SOL_DET_CD_OPTIONS_FILE:
        newState.solDetCDOptionsFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getStatusOptionsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_STATUS_OPTIONS_CR:
        newState.statusOptionsCR = action.payload;
      return newState
      case GET_STATUS_OPTIONS_FILE:
        newState.statusOptionsFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getSubStatusOptionsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_SUB_STATUS_OPTIONS_CR:
        newState.subStatusOptionsCR = action.payload;
      return newState
      case GET_SUB_STATUS_OPTIONS_FILE:
        newState.subStatusOptionsFile = action.payload;
      return newState
    default:
      return state;
  }
};
const getSolDetCDOptionsFileReducer = (state = initialState.typeFilter, action) => {
  switch (action.type) {
    case GET_SOL_DET_CD_OPTIONS_FILE:
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
  getSubStatusFilterValueReducer,
  getSolDetCDFilterValueReducer,getStatusFilterValueReducer,
  getSolCDFilterValueReducer,getSolDetCDOptionsFileReducer,
  getStatusOptionsReducer,getSubStatusOptionsReducer,
  getSolDetCDOptionsReducer};