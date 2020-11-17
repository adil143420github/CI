import {GET_CRS_RESULT_DATA,GET_TYPE_FILTER_CR,
  GET_TYPE_OPTIONS_CR,GET_SOLCD_OPTIONS_CR,
  GET_SORT_ICONS_CR,GET_SORTED_COL_CR,
  GET_TYPE_FILTER_FILE,GET_SOL_DET_CD_FILTER_FILE,
  GET_SOL_DET_CD_FILTER_CR,GET_STATUS_FILTER_CR,
  GET_STATUS_FILTER_FILE,GET_SUB_STATUS_FILTER_CR,
  GET_SUB_STATUS_FILTER_FILE,GET_SELECTALL_ROW_FILE,
  GET_SELECTALL_ROW_CR,GET_THUMBS_UP_CR,
  GET_THUMBS_UP_FILE,
  GET_STATUS_OPTIONS_CR,GET_SUB_STATUS_OPTIONS_CR,
  GET_SOL_DET_CD_OPTIONS_CR,GET_TYPE_OPTIONS_FILE,
  GET_SORTED_COL_FILE,GET_SOL_CD_FILTER_CR,
  GET_SOL_CD_FILTER_FILE,GET_SELECTED_ROW_FILE,
  GET_SOLCD_OPTIONS_FILE,GET_SELECTED_ROW_CR,
  GET_EXPANDED_ROW_CR,GET_EXPANDED_ROW_FILE,
  GET_SOL_DET_CD_OPTIONS_FILE} from '../actions-types/actiontypes'

    const getCRsResultsAction = (payload) => {
        return {
          type: GET_CRS_RESULT_DATA,
          payload
        };
      };
      const getTypeFilterValueCRAction = (payload) => {
        return {
          type: GET_TYPE_FILTER_CR,
          payload
        };
      };
      const getTypeFilterValueFileAction = (payload) => {
        return {
          type: GET_TYPE_FILTER_FILE,
          payload
        };
      };
      const getSolCDFilterValueCRAction = (payload) => {
        return {
          type: GET_SOL_CD_FILTER_CR,
          payload
        };
      };
      const getSolCDFilterValueFileAction = (payload) => {
        return {
          type: GET_SOL_CD_FILTER_FILE,
          payload
        };
      };
      const getSolDetCDFilterValueCRAction = (payload) => {
        return {
          type: GET_SOL_DET_CD_FILTER_CR,
          payload
        };
      };
      const getStatusFilterValueCRAction = (payload) => {
        return {
          type: GET_STATUS_FILTER_CR,
          payload
        };
      };
      const getStatusFilterValueFileAction = (payload) => {
        return {
          type: GET_STATUS_FILTER_FILE,
          payload
        };
      };
      const getSubStatusFilterValueCRAction = (payload) => {
        return {
          type: GET_SUB_STATUS_FILTER_CR,
          payload
        };
      };
      const getSubStatusFilterValueFileAction = (payload) => {
        return {
          type: GET_SUB_STATUS_FILTER_FILE,
          payload
        };
      };
      const getSolDetCDFilterValueFileAction = (payload) => {
        return {
          type: GET_SOL_DET_CD_FILTER_FILE,
          payload
        };
      };
      const getTypeOptionsCRAction = (payload) => {
        return {
          type: GET_TYPE_OPTIONS_CR,
          payload
        };
      };
      const getTypeOptionsFileAction = (payload) => {
        return {
          type: GET_TYPE_OPTIONS_FILE,
          payload
        };
      };
      const getSolCDOptionsCRAction = (payload) => {
        return {
          type: GET_SOLCD_OPTIONS_CR,
          payload
        };
      };
      const getSolCDOptionsFileAction = (payload) => {
        return {
          type: GET_SOLCD_OPTIONS_FILE,
          payload
        };
      };
      const getSolDetCDOptionsCRAction = (payload) => {
        return {
          type: GET_SOL_DET_CD_OPTIONS_CR,
          payload
        };
      };
      const getSolDetCDOptionsFileAction = (payload) => {
        return {
          type: GET_SOL_DET_CD_OPTIONS_FILE,
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
      const getExpandedRowCRAction = (payload) => {
        return {
          type: GET_EXPANDED_ROW_CR,
          payload
        };
      };
      const getExpandedRowFileAction = (payload) => {
        return {
          type: GET_EXPANDED_ROW_FILE,
          payload
        };
      };
      const getSelectedRowCRAction = (payload) => {
        return {
          type: GET_SELECTED_ROW_CR,
          payload
        };
      };
      const getSelectedRowFileAction = (payload) => {
        return {
          type: GET_SELECTED_ROW_FILE,
          payload
        };
      };
      const getSelectAllCRAction = (payload) => {
        return {
          type: GET_SELECTALL_ROW_CR,
          payload
        };
      };
      const getSelectAllFileAction = (payload) => {
        return {
          type: GET_SELECTALL_ROW_FILE,
          payload
        };
      };
      const getThumbsUpCRAction = (payload) => {
        return {
          type: GET_THUMBS_UP_CR,
          payload
        };
      };
      const getThumbsUpFileAction = (payload) => {
        return {
          type: GET_THUMBS_UP_FILE,
          payload
        };
      };

      export default { getCRsResultsAction,getTypeFilterValueCRAction,
        getTypeOptionsCRAction,getSolCDOptionsCRAction,
        getSortedColCRAction,getSortedColFileAction,
        getThumbsUpCRAction,getThumbsUpFileAction,
        getStatusFilterValueFileAction,getSubStatusFilterValueCRAction,
        getSubStatusFilterValueFileAction,getExpandedRowCRAction,
        getExpandedRowFileAction,getSelectedRowCRAction,
        getSelectedRowFileAction,getSelectAllCRAction,
        getSelectAllFileAction,
        getSolDetCDFilterValueCRAction,getStatusFilterValueCRAction,
        getSolDetCDFilterValueFileAction,getSolDetCDFilterValueCRAction,
        getSolCDOptionsFileAction,getSolCDFilterValueFileAction,
        getSolCDFilterValueCRAction,getSolDetCDOptionsFileAction,
        getTypeOptionsFileAction,getTypeFilterValueFileAction,
        getSubStatusOptionsAction,getSortIconsCRAction,
        getSolDetCDOptionsCRAction,getStatusOptionsAction};