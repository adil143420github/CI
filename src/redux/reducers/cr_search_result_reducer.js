import {SET_CRS_RESULT_DATA} from '../actions-types/actiontypes'
  const initialState =
   {
    CRsResult:[]
    };
  const getCRsResultsReducer = (state = initialState.CRsResult, action) => {
  switch (action.type) {
    case SET_CRS_RESULT_DATA:
      return { ...state, payload: action.payload }
    default:
      return state;
  }
};

export  {getCRsResultsReducer};