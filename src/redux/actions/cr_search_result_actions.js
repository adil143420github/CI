import {GET_CRS_RESULT_DATA,GET_TYPE_FILTER_VALUE,
  GET_TYPE_OPTIONS_CR,GET_SOLCD_OPTIONS_CR,
  GET_SORT_ICONS_CR,GET_SORTED_COL_CR,
  GET_STATUS_OPTIONS_CR,GET_SUB_STATUS_OPTIONS_CR,
  GET_SOL_DET_CD_OPTIONS_CR,
  GET_SORTED_COL_FILE} from '../actions-types/actiontypes'

    const getCRsResultsAction = (payload) => {
        return {
          type: GET_CRS_RESULT_DATA,
          payload
        };
      };
      const getTypeFilterValueAction = (payload) => {
        return {
          type: GET_TYPE_FILTER_VALUE,
          payload
        };
      };
      const getTypeOptionsAction = (payload) => {
        return {
          type: GET_TYPE_OPTIONS_CR,
          payload
        };
      };
      const getSolCDOptionsAction = (payload) => {
        return {
          type: GET_SOLCD_OPTIONS_CR,
          payload
        };
      };
      const getSolDetCDOptionsAction = (payload) => {
        return {
          type: GET_SOL_DET_CD_OPTIONS_CR,
          payload
        };
      };
      const getStatusOptionsAction = (payload) => {
        return {
          type: GET_STATUS_OPTIONS_CR,
          payload
        };
      };
      const getSubStatusOptionsAction = (payload) => {
        return {
          type: GET_SUB_STATUS_OPTIONS_CR,
          payload
        };
      };
      const getSortIconsCRAction = (payload) => {
        return {
          type: GET_SORT_ICONS_CR,
          payload
        };
      };
      const getSortedColCRAction = (payload) => {
        return {
          type: GET_SORTED_COL_CR,
          payload
        };
      };
      const getSortedColFileAction = (payload) => {
        return {
          type: GET_SORTED_COL_FILE,
          payload
        };
      };

      export default { getCRsResultsAction,getTypeFilterValueAction,
        getTypeOptionsAction,getSolCDOptionsAction,
        getSortedColCRAction,getSortedColFileAction,
        getSubStatusOptionsAction,getSortIconsCRAction,
        getSolDetCDOptionsAction,getStatusOptionsAction};