import {GET_SOLUTION_CR_INDEX,GET_CR_NUMBER,GET_ACTIVE_KEY,
  GET_KEYWORDS_BY_CR,GET_TAGS,GET_LOADER,
  GET_INTRODUCTORY_CHECKBOX,
  GET_SUGGESTED_KEYWORDS,GET_INTRODUCTORY_CR,
  GET_INTODUCTORY_CR_KEYWORDS,GET_UPDATED_KEYWORDS,
  GET_COLLAPSE,GET_COLLAPSE_EXPAND} from '../actions-types/actiontypes'
const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  const getAsyncData = () => {
    return {
      type: "GET_ASYNC_DATA",
    };
  };
  const getEmpData = () => {
    return {
      type: "GET_EMP_DATA",
    };
  };
  ///new actions actual one's 
  const getAllSolutionCRIndexAction = () => {
    return {
      type: GET_SOLUTION_CR_INDEX,
    };
  };
  const getSlectedSolutionCRAction = (payload) => {
    return {
      type: "SELECTED_SOL_CR",
      payload
    };
  };
  const getSlectedCRTypeAction = (payload) => {
    return {
      type: "SELECTED_CR_TYPE",
      payload
    };
  };
  const getCRNumberAction = (payload) => {
    return {
      type: GET_CR_NUMBER,
      payload
    };
  };
  const getActivationKeyAction = (payload) => {
    return {
      type: GET_ACTIVE_KEY,
      payload
    };
  };
  const getKeywordsByCRAction = (payload) => {
    return {
      type: GET_KEYWORDS_BY_CR,
      payload
    };
  };
  const getTagsAction = (payload) => {
    return {
      type: GET_TAGS,
      payload
    };
  };
  const getLoaderAction = (payload) => {
    return {
      type: GET_LOADER,
      payload
    };
  };
  const getSuggestedKeywordsAction = (payload) => {
    return {
      type: GET_SUGGESTED_KEYWORDS,
      payload
    };
  };

  const getCollapseAction = (payload) => {
    return {
      type: GET_COLLAPSE,
      payload
    };
  };

  const getCollapseExpanAction = (payload) => {
    return {
      type: GET_COLLAPSE_EXPAND,
      payload
    };
  };

  const getIntroductoryCRAction = (payload) => {
    return {
      type: GET_INTRODUCTORY_CR,
      payload
    };
  };

  const getIntroductoryCheckBoxAction = () => {
    return {
      type: GET_INTRODUCTORY_CHECKBOX,
    };
  };

  const getIntroductoryCRUpdateKeywordsAction = (payload,prevData,flag) => {
    return {
      type: GET_UPDATED_KEYWORDS,
      payload,
      prevData,
      flag
    };
  };
  
  export default { increment, decrement, getAsyncData ,getEmpData,
    getAllSolutionCRIndexAction,getSlectedSolutionCRAction,getSlectedCRTypeAction,
    getCRNumberAction,getActivationKeyAction,getKeywordsByCRAction,
    getTagsAction,getLoaderAction,getSuggestedKeywordsAction,
    getIntroductoryCheckBoxAction,getIntroductoryCRUpdateKeywordsAction,
    getCollapseAction,getCollapseExpanAction,getIntroductoryCRAction};