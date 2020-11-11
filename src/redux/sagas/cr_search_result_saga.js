import { put, takeLatest, all } from "redux-saga/effects";
import {SET_CRS_RESULT_DATA,GET_CRS_RESULT_DATA,
    GET_LOADER,GET_SOL_DET_CD_OPTIONS_CR,
    GET_STATUS_OPTIONS_CR,GET_SUB_STATUS_OPTIONS_CR,
    GET_TYPE_OPTIONS_CR,GET_SOLCD_OPTIONS_CR} from '../actions-types/actiontypes';
import axios from "axios";

const SimpleTable = (data) => {
    let cr_data = [];
        var arrr = [];
        var types = [];
        var solCD = [], solDetailCD = [], status = [], substatus = [], affectPack = [], resolvPack = [], packName = [];
        let cr_additional_data = []
        for (let i = 0; i < data.length; i++) {
            arrr.push(data[i]._source.sol_chng_num);
        }

        if (data) {
            data.map((value, index) => {
                if (!types.includes(value._source.type_nm) && value._source.type_nm !== undefined && value._source.type_nm != "") {
                    types.push(value._source.type_nm);
                }
                if (!solCD.includes(value._source.solution_cd) && value._source.solution_cd !== undefined && value._source.solution_cd != "") {
                    solCD.push(value._source.solution_cd);
                }
                if (!solDetailCD.includes(value._source.solution_detail_cd) && value._source.solution_detail_cd !== undefined && value._source.solution_detail_cd != "") {
                    solDetailCD.push(value._source.solution_detail_cd);
                }
                if (!status.includes(value._source.stat_cd) && value._source.stat_cd !== undefined && value._source.stat_cd != "") {
                    status.push(value._source.stat_cd);
                }
                if (!substatus.includes(value._source.sub_stat_cd) && value._source.sub_stat_cd !== undefined && value._source.sub_stat_cd != "") {
                    substatus.push(value._source.sub_stat_cd);
                }
                if (!affectPack.includes(value._source.Affected_Package_Number) && value._source.Affected_Package_Number !== undefined && value._source.Affected_Package_Number != "") {
                    affectPack.push(value._source.Affected_Package_Number);
                }
                if (!resolvPack.includes(value._source.Resolved_Package_Number) && value._source.Resolved_Package_Number !== undefined && value._source.Resolved_Package_Number != "") {
                    resolvPack.push(value._source.Resolved_Package_Number);
                }
                if (!packName.includes(value._source.release_name) && value._source.release_name !== undefined && value._source.release_name != "") {
                    packName.push(value._source.release_name);
                }
                cr_data.push(
                    {
                        'CR_Number': value._source.sol_chng_num || "",
                        'CR_Number2': value._source.sol_chng_num || "",
                        'type': value._source.type_nm || "",
                        'Summary': value._source.summary_txt || "",
                        'Open_Date': value._source.open_dttm || "",
                        'Solution_CD': value._source.solution_cd || "",
                        'solution_detail_cd': value._source.solution_detail_cd || "",
                        'request_manager_number': value._source.RMC[0].request_manager_number || "",
                        'Status': value._source.stat_cd || "",
                        'Sub_Status': value._source.sub_stat_cd || "",
                        'Affected_Package_Number': value._source.Affected_Package_Number || "",
                        'release_name': value._source.release_name || "",
                        'Resolved_Package': value._source.Resolved_Package_Number || "",
                        'score': value._score || "",
                        // 'id': value._id,
                        'External_Key': value._source.extrnl_key,
                        'Description': value._source.descr_txt,
                        'qa_ownr_opr_id': value._source.qa_ownr_opr_id,
                        'rprtd_rlse': value._source.rprtd_rlse,
                        'request_manager_number': value._source.RMC[0].request_manager_number,
                        'Old_CR_num': value._source.old_cr_number || "",
                    }
                )
            })
            // this.setState({
            //     types: types, solutionCD: solCD, solutionDetailCD: solDetailCD,
            //     status: status, subStatus: substatus, affectedPackage: affectPack, resolvedPackage: resolvPack,
            //     packageName: packName
            // })
        }
        return cr_data
}
const getCRsResultsActionrunOurAction = function* (data) {
    var CRsResults=[],types=[],typeOptions=[],solCD = [], solDetailCD = [], status = [], substatus = [], affectPack = [], resolvPack = [], packName = [],
    solCDOptions=[],solDetailCDOptions=[],statusOptions=[],substatusOptions=[],affectPackOptions=[],resolvPackOptions=[],packNameOptions=[];
    yield axios.post('http://localhost:6849/access/searchByKeyword', {
        solutionName: data.payload.solution,
        keyword: data.payload.keyword,
        crtype: data.payload.crtype
  }).then((response) => {
    if (response.data.hits.hits.length > 0) {
         CRsResults = SimpleTable(response.data.hits.hits);
         CRsResults.map(item=>{
            if(!types.includes(item.type) && item.type !== ""){
                types.push(item.type);
                typeOptions.push({value:item.type,label:item.type,chipLabel:item.type.substring(0,4)+'..'})
            }
            if(!solCD.includes(item.Solution_CD) && item.Solution_CD !== ""){
                solCD.push(item.Solution_CD);
                solCDOptions.push({value:item.Solution_CD,label:item.Solution_CD,chipLabel:item.Solution_CD.substring(0,4)+'..'})
            }
            if(!solDetailCD.includes(item.solution_detail_cd) && item.solution_detail_cd!=""){
                solDetailCD.push(item.solution_detail_cd);
                solDetailCDOptions.push({value:item.solution_detail_cd,label:item.solution_detail_cd,chipLabel:item.solution_detail_cd.substring(0,4)+'..'})
            }
            if(!status.includes(item.Status) && item.Status !== ""){
                status.push(item.Status);
                statusOptions.push({value:item.Status,label:item.Status,chipLabel:item.Status.substring(0,4)+'..'})
            }
            if(!substatus.includes(item.Sub_Status) && item.Sub_Status !== ""){
                substatus.push(item.Sub_Status);
                substatusOptions.push({value:item.Sub_Status,label:item.Sub_Status,chipLabel:item.Sub_Status.substring(0,4)+'..'})
            }
         })
    } 
  });
    yield put({ type: SET_CRS_RESULT_DATA, payload: CRsResults });
    yield put({ type: GET_TYPE_OPTIONS_CR, payload: typeOptions });
    yield put({ type: GET_SOLCD_OPTIONS_CR, payload: solCDOptions });
    yield put({ type: GET_SOL_DET_CD_OPTIONS_CR, payload: solDetailCDOptions });
    yield put({ type: GET_STATUS_OPTIONS_CR, payload: statusOptions });
    yield put({ type: GET_SUB_STATUS_OPTIONS_CR, payload: substatusOptions });
    yield put({ type: GET_LOADER, payload: false });
  };
  function* getCRsResultsActionDataWatcher(data) {
    yield takeLatest(GET_CRS_RESULT_DATA, getCRsResultsActionrunOurAction);
  }

  export default function* rootSaga() {
    yield all([getCRsResultsActionDataWatcher()]);
  }
  