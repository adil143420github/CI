import {GET_CRS_RESULT_DATA} from '../actions-types/actiontypes'

    const getCRsResultsAction = (payload) => {
        return {
          type: GET_CRS_RESULT_DATA,
          payload
        };
      };

      export default { getCRsResultsAction};