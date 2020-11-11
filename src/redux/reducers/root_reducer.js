import { combineReducers } from "redux";
import {counter,customAsyncData,
  getAllEmp,
  getAllSolutionCRIndexReducer,
  getselectedSolCRReducer,
  getselectedCRTypeReducer,
  getCRNumberReducer,
  getActivationKeyReducer,
  getCollapseReducer,
  getIntroductoryCRUpdateKeywordsReducer,
  getIntroductoryChexkBoxReducer,
  getIntroductoryCRReducer,
  getCollapseExpandReducer,
  getKeywordsByCRReducer,
  getTagsReducer,getLoaderReducer,
  getSuggestedKeywordsReducer} from "../reducers/search_bar_reducer";
  import {getCRsResultsReducer,
    getTypeFilterValueReducer,getSolDetCDOptionsReducer,
    getSortIconsReducer,getSortedColReducer,
    getStatusOptionsReducer,getSubStatusOptionsReducer,
    getTypeOptionsReducer,getSolCDOptionsReducer} from '../reducers/cr_search_result_reducer'

export default combineReducers({
  counter,customAsyncData,getAllEmp,getAllSolutionCRIndexReducer,
  getselectedSolCRReducer,getselectedCRTypeReducer,getCRNumberReducer,
  getActivationKeyReducer,getKeywordsByCRReducer,getTagsReducer,
  getLoaderReducer,getSuggestedKeywordsReducer,
  getIntroductoryChexkBoxReducer,getIntroductoryCRUpdateKeywordsReducer,
  getCollapseReducer,getCollapseExpandReducer,getIntroductoryCRReducer,
  getCRsResultsReducer,getTypeFilterValueReducer,getSortedColReducer,
  getSortIconsReducer,
  getTypeOptionsReducer,getSolCDOptionsReducer,getSolDetCDOptionsReducer,
  getStatusOptionsReducer,getSubStatusOptionsReducer
});
