import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
// import Picky from "react-picky";
// import "react-picky/dist/picky.css";
// import ReactTable from 'react-table-6';
// import 'react-table-6/react-table.css';
import TagSelect from 'terra-form-select/lib/TagSelect';
// import Checkbox from 'terra-form-checkbox';
import Checkbox from 'react-three-state-checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import { Zoom, Paper } from '@material-ui/core';
import IconFeatured from 'terra-icon/lib/icon/IconFeatured';
import IconFeaturedOff from 'terra-icon/lib/icon/IconFeaturedOff';
import IconSortAscending from 'terra-icon/lib/icon/IconSortAscending';
import IconSortDescending from 'terra-icon/lib/icon/IconSortDescending';
import IconExternalLink from 'terra-icon/lib/icon/IconExternalLink';
import Hyperlink from 'terra-hyperlink';
import PaginationComponent from '../../utils/pagination_component'
import { useDispatch, useSelector } from "react-redux";
// import { Multiselect } from 'multiselect-react-dropdown';
import './crs_results.scss'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import resultAction from "../../redux/actions/cr_search_result_actions";
import Chip from '@material-ui/core/Chip';
import Popper from "@material-ui/core/Popper";
import TextField from '@material-ui/core/TextField';
import Select, { components } from "react-select";
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import allActions from '../../redux/actions/cr_search_result_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCamera,faThumbsUp } from '@fortawesome/free-solid-svg-icons'

 const arr=[];
  for(let i=0;i<100;i++){
    arr.push({CR_Number:'adil'+i,CR_Number2:'adil'+i})
  }
const popperStyle = () => ({
  popper: {
    maxWidth: "fit-content"
  }
});
const PopperComponent = function (props) {
  return <Popper {...props} style={popperStyle.popper} placement="bottom-start" />;
};
const ClearIndicatorStyles = (base, state) => ({
  ...base,
  display: 'none'
});
const MultiValueContainer = props => {
  // return (
  //   <div>
  //     <div data-for="main" data-tip={props.data.label} data-iscapture="true">
  //       <components.MultiValueContainer {...props} />
  //     </div>
  //     <ReactTooltip id="main" place={"top"} type={"dark"} effect={"float"} multiline={true} />
  //   </div>
  // );
};
const MultiValue = props => (
  <div>
    <div data-for="main" data-tip={props.data.label} data-iscapture="true">
      <components.MultiValue {...props}>
        {props.data.chipLabel}
      </components.MultiValue>
    </div>
    <ReactTooltip id="main" place={"top"} type={"dark"} effect={"float"} multiline={true} />
  </div>
);
const DropdownIndicator = null
export default function CRResults(props) {
  const [count, setCount] = useState([]);
  // const [selectAll, setSelectAll] = useState(0);
  const [render, setRender] = useState(0);
  const [selectedSample, setSelectedSample] = useState({});
  const [sortIcons, setSortIcons] = useState([null, null, null, null, null, null, null, null, null])
  useEffect(() => {

  });

  const dispatch = useDispatch();

  const CRsResults = useSelector((state) => state.getCRsResultsReducer.payload);
  const typeFilterCR = useSelector((state) => state.getTypeFilterValueReducer.typeFilterCR);
  const typeFilterFile = useSelector((state) => state.getTypeFilterValueReducer.typeFilterFile);
  const solCDFilterCR = useSelector((state) => state.getSolCDFilterValueReducer.solCDFilterCR);
  const solCDFilterFile = useSelector((state) => state.getSolCDFilterValueReducer.solCDFilterFile);
  const solDetCDFilterCR = useSelector((state) => state.getSolDetCDFilterValueReducer.solDetCDFilterCR);
  const solDetCDFilterFile = useSelector((state) => state.getSolDetCDFilterValueReducer.solDetCDFilterFile);
  const statusFilterCR = useSelector((state) => state.getStatusFilterValueReducer.statusFilterCR);
  const statusFilterFile = useSelector((state) => state.getStatusFilterValueReducer.statusFilterFile);
  const subStatusFilterCR = useSelector((state) => state.getSubStatusFilterValueReducer.subStatusFilterCR);
  const subStatusFilterFile = useSelector((state) => state.getSubStatusFilterValueReducer.subStatusFilterFile);
  const typeOptionsCR = useSelector((state) => state.getTypeOptionsReducer.typeOptionsCR);
  const typeOptionsFile = useSelector((state) => state.getTypeOptionsReducer.typeOptionsFile);
  const solCDOptionsCR = useSelector((state) => state.getSolCDOptionsReducer.solCDOptionsCR);
  const solCDOptionsFile = useSelector((state) => state.getSolCDOptionsReducer.solCDOptionsFile);
  const solDetCDOptionsCR = useSelector((state) => state.getSolDetCDOptionsReducer.solDetCDOptionsCR);
  const solDetCDOptionsFile = useSelector((state) => state.getSolDetCDOptionsReducer.solDetCDOptionsFile);
  const statusOptionsCR = useSelector((state) => state.getStatusOptionsReducer.statusOptionsCR);
  const statusOptionsFile = useSelector((state) => state.getStatusOptionsReducer.statusOptionsFile);
  const subStatusOptionsCR = useSelector((state) => state.getSubStatusOptionsReducer.subStatusOptionsCR);
  const subStatusOptionsFile = useSelector((state) => state.getSubStatusOptionsReducer.subStatusOptionsFile);
  const sortedArrayCR = useSelector((state) => state.getSortedColReducer.sortedColCR);
  const sortedArrayFile = useSelector((state) => state.getSortedColReducer.sortedColFile);
  const expandedRowCR = useSelector((state) => state.getExpandedRowReducer.expandedRowCR);
  const expandedRowFile = useSelector((state) => state.getExpandedRowReducer.expandedRowFile);
  const selectedRowCR = useSelector((state) => state.getSelectedRowReducer.selectedRowCR);
  const selectedRowFile = useSelector((state) => state.getSelectedRowReducer.selectedRowFile);
  const selectedAllCR = useSelector((state) => state.getSelectAllReducer.selectedAllCR);
  const selectedAllFile = useSelector((state) => state.getSelectAllReducer.selectedAllFile);
  const thumbsUpCR = useSelector((state) => state.getThumbsUpReducer.thumbsUpCR);
  const thumbsUpFile = useSelector((state) => state.getThumbsUpReducer.thumbsUpFile);

  var sortCol = [], typeOptions = [], typeFilter = [], solCDOptions = [], solCDFilter = [],
    solDetCDOptions = [], solDetCDFilter = [],statusOptions=[],statusFilter=[],
    subStatusOptions=[],subStatusFilter=[],expandedRow=[],selectedRow={},selectAll=[],
    thumbsUp={};
  if (props.searchType === 'CR') {
    sortCol = sortedArrayCR;
    typeOptions = typeOptionsCR;
    typeFilter = typeFilterCR;
    solCDOptions = solCDOptionsCR;
    solCDFilter = solCDFilterCR;
    solDetCDOptions = solDetCDOptionsCR;
    solDetCDFilter = solDetCDFilterCR;
    statusOptions=statusOptionsCR;
    statusFilter=statusFilterCR;
    subStatusOptions=subStatusOptionsCR;
    subStatusFilter=subStatusFilterCR;
    expandedRow=expandedRowCR;
    selectedRow=selectedRowCR;
    selectAll=selectedAllCR;
    thumbsUp=thumbsUpCR;

  } else {
    sortCol = sortedArrayFile;
    typeOptions = typeOptionsFile;
    typeFilter = typeFilterFile;
    solCDOptions = solCDOptionsFile;
    solCDFilter = solCDFilterFile;
    solDetCDOptions = solDetCDOptionsFile;
    solDetCDFilter = solDetCDFilterFile;
    statusOptions=statusOptionsFile;
    statusFilter=statusFilterFile;
    subStatusOptions=subStatusOptionsFile;
    subStatusFilter=subStatusFilterFile;
    expandedRow=expandedRowFile;
    selectedRow=selectedRowFile;
    selectAll=selectedAllFile;
    thumbsUp=thumbsUpFile;
  }
  const onChangeColor = (CR_Number) => {
    const newSelected = Object.assign({}, thumbsUp);
    newSelected[CR_Number] = true;
    if(props.searchType === 'CR'){
      dispatch(allActions.getThumbsUpCRAction(newSelected));
    }else{
      dispatch(allActions.getThumbsUpFileAction(newSelected));
    }
  }
  const toggleSelectAll = () => {
    let newSelected = {},selectedIndex=0;
    if (selectAll === 0) {
      CRsResults.forEach(x => {
        newSelected[x.CR_Number2] = true;
      });
      selectedIndex=1;
    }else if(selectAll === 2){
      CRsResults.forEach(x => {
        newSelected[x.CR_Number2] = false;
      });
      selectedIndex=0
    }else if(selectAll === 1){
      CRsResults.forEach(x => {
        newSelected[x.CR_Number2] = false;
      });
      selectedIndex=0;
    }
    if(props.searchType === 'CR'){
      dispatch(allActions.getSelectAllCRAction(selectedIndex));
      dispatch(allActions.getSelectedRowCRAction(newSelected));
    }else{
      dispatch(allActions.getSelectAllFileAction(selectedIndex));
      dispatch(allActions.getSelectedRowFileAction(newSelected));
    }
  }
  const toggleRow = (CR_Number, original) => {
    const newSelected = Object.assign({}, selectedRow);
    newSelected[CR_Number] = !selectedRow[CR_Number];
    if (props.searchType === 'CR') {
      dispatch(allActions.getSelectedRowCRAction(newSelected));
      dispatch(allActions.getSelectAllCRAction(2));
    } else {
      dispatch(allActions.getSelectAllFileAction(2));
      dispatch(allActions.getSelectedRowFileAction(newSelected));
    }
  }
  const onSortedChange = (newSorted, column, shiftKey) => {
    if (props.searchType === 'CR') {
      dispatch(allActions.getSortedColCRAction(newSorted));
    } else {
      dispatch(allActions.getSortedColFileAction(newSorted));
    }
  }
  const setIsShown = (value, index) => {
    let sortIcon = sortIcons
    sortIcon[index] = value
    setSortIcons(sortIcon);
    setRender(!render);
  }
  const onExpandRow = (newExpanded) => {
    if (props.searchType === 'CR') {
    dispatch(resultAction.getExpandedRowCRAction(newExpanded));
    }else{
      dispatch(resultAction.getExpandedRowFileAction(newExpanded));
    }
  }

  const onPageChange = (pageIndex) => {
    if (props.searchType === 'CR') {
      dispatch(resultAction.getExpandedRowCRAction({}));
      }else{
        dispatch(resultAction.getExpandedRowFileAction({}));
      }
  }
  const onPageSizeChange = (pageSize, pageIndex) => {
  }
  const handleChange = (selectedItem, accessor) => {
    console.log("handleChange= ", accessor, selectedItem);
    if (props.searchType === 'CR') {
      if (accessor === 'type') {
        dispatch(resultAction.getTypeFilterValueCRAction(selectedItem));
      } else if (accessor === 'Solution_CD') {
        dispatch(resultAction.getSolCDFilterValueCRAction(selectedItem));
      } else if (accessor === 'solution_detail_cd') {
        dispatch(resultAction.getSolDetCDFilterValueCRAction(selectedItem));
      } else if (accessor === 'Status') {
        dispatch(resultAction.getStatusFilterValueCRAction(selectedItem));
      } else if (accessor === 'Sub_Status') {
        dispatch(resultAction.getSubStatusFilterValueCRAction(selectedItem));
      }
       
    } else {
      dispatch(resultAction.getTypeFilterValueFileAction(selectedItem));
    }
  }
  const cols = [{
    Header: "",
    columns: [
      {
        id: "checkbox",
        accessor: "",
        resizable: false,
        filterable: false,
        Cell: ({ original }) => {
          return (
            <Checkbox id="firstInline" className="checkbox_results" checked={selectedRow[original.CR_Number2] === true} isLabelHidden isInline onChange={() => toggleRow(original.CR_Number2, original)} />
          );
        },
        Header: x => {
          return (
            <Checkbox id="firstInline" className="checkbox_header" checked={selectAll === 1} indeterminate={selectAll === 2} onChange={toggleSelectAll} />
          );
        },
        sortable: false,
        width: 45
      }]
  },
  {
    Header: "",
    columns: [
      {
        id: "Thumbup",
        accessor: "",
        resizable: false,
        filterable: false,
        Cell: ({ original }) => {
          return (
            
              <FontAwesomeIcon className="thumbs_up" icon={faThumbsUp} color={thumbsUp[original.CR_Number2] === true ? "red" : "" } onClick={()=>onChangeColor(original.CR_Number2)} />
              // {/* <IconFeatured
              //   id="icon"
              //   className="checkbox_results"
              //   //color={this.props.likeButton[original.CR_Number2] === true ? "primary" : "action" }
              //   //onClick={()=> this.onChangeColor(original.CR_Number2)}
              //   style={{ width: '25px', marginLeft: '15%', marginTop: '25%' }}
              // /> */}
           
          );
        },
        sortable: false,
        width: 45,
        vertical: 'top'
      }]
  },
  {
    Header: () => (
      <div className="row" onMouseEnter={() => setIsShown(true, 0)} onMouseLeave={() => setIsShown(false, 0)}>
        <div className="column_m">
          CR Number
        </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'CR_Number' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'CR_Number' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[0] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    accessor: 'CR_Number',
    width: 175,
    Cell: ({ original }) => {
      return (
        <div>
          <div>
            <Tooltip TransitionComponent={Zoom} title={original.CR_Number2.startsWith('1-') ? "This is Navigator CR, Jira doesn't exists for this CR" : ""} placement="top" arrow>
              {original.CR_Number2.startsWith('1-') ? <Hyperlink isUnderlineHidden>{original.CR_Number2}</Hyperlink> :
                <Hyperlink isUnderlineHidden href={"https://jira2.cerner.com/browse/" + original.CR_Number2} variant="external">{original.CR_Number2}</Hyperlink>}
            </Tooltip>
            <div className="line"></div>
          </div>
          {original.CR_Number2.includes(original.Old_CR_num) ? '' : '(' + original.Old_CR_num + ')'}
        </div>
      );
    },
    resizable: false,
    Filter: ({ filter, onChange }) => (
      <input
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : ""}
        placeholder="Filter CR Number"
        className="filter_input"
      />
    ),
    filterMethod: (filter, row) => {
      return row._original.CR_Number2.toLowerCase().indexOf(filter.value.toLowerCase()) >= 0;
    }
  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 1)}
        onMouseLeave={() => setIsShown(false, 1)}>
        <div className="column_m">
          Type
      </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'type' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'type' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[1] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    accessor: 'type',
    width: 110,
    style: { 'whiteSpace': 'unset' },
    resizable: false,
    Filter: ({ filter, onChange }) => {
      return (
          <Select
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={typeFilter}
            onChange={(selectedItem) => handleChange(selectedItem, 'type')}
            isMulti
            options={typeOptions}
            menuPortalTarget={document.body}
          />
      );
    }
  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 2)}
        onMouseLeave={() => setIsShown(false, 2)}>
        <div className="column_m">
          Summary
          </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'Summary' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'Summary' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[2] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    Filter: ({ filter, onChange }) => (
      <input
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : ""}
        placeholder="Filter Summary"
        className="filter_input"
      />
    ),
    accessor: 'Summary',
    resizable: false,
    // width: 250,
    style: { 'whiteSpace': 'unset' }
  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 3)}
        onMouseLeave={() => setIsShown(false, 3)}>
        <div className="column_m">
          Open Date
          </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'Open_Date' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'Open_Date' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[3] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    Filter: ({ filter, onChange }) => (
      <input
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : ""}
        placeholder="Filter Date"
        className="filter_input"
      />
    ),
    accessor: 'Open_Date',
    style: { 'whiteSpace': 'unset' },
    resizable: false,
    width: 100,
    Cell: ({ original }) => (
      moment(original.Open_Date).format("MMM DD, YYYY hh:mm A z")
    ),
  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 4)}
        onMouseLeave={() => setIsShown(false, 4)}>
        <div className="column_m">
          Solution CD
        </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'Solution_CD' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'Solution_CD' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[4] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    accessor: 'Solution_CD',
    width: 100,
    resizable: false,
    style: { 'whiteSpace': 'unset' },
    Filter: ({ filter, onChange }) => {
      return (
        // <div style={{ width: '90px' }}>
          <Select
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={solCDFilter}
            onChange={(selectedItem) => handleChange(selectedItem, 'Solution_CD')}
            isMulti
            options={solCDOptions}
            menuPortalTarget={document.body}
          />
        // </div>
      );
    }
  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 5)}
        onMouseLeave={() => setIsShown(false, 5)}>
        <div className="column_m">
          Solution Detail CD
      </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'solution_detail_cd' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'solution_detail_cd' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[5] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    accessor: 'solution_detail_cd',
    width: 110,
    resizable: false,
    style: { 'whiteSpace': 'unset' },
    Filter: ({ filter, onChange }) => {
      return (
        // <div style={{ width: '100px' }}>
          <Select
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={solDetCDFilter}
            onChange={(selectedItem) => handleChange(selectedItem, 'solution_detail_cd')}
            isMulti
            options={solDetCDOptions}
            menuPortalTarget={document.body}
          />
        // </div>
      );
    }
  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 6)}
        onMouseLeave={() => setIsShown(false, 6)}>
        <div className="column_m">
          Status
      </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'Status' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'Status' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[6] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    accessor: 'Status',
    width: 100,
    resizable: false,
    id: "Status",
    Filter: ({ filter, onChange }) => {
      return (
        // <div style={{ width: '90px' }}>
          <Select
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={statusFilter}
            onChange={(selectedItem) => handleChange(selectedItem, 'Status')}
            isMulti
            options={statusOptions}
            menuPortalTarget={document.body}
          />
        // </div>
      );
    }

  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 7)}
        onMouseLeave={() => setIsShown(false, 7)}>
        <div className="column_m">
          Sub Status
      </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'Sub_Status' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'Sub_Status' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[7] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    accessor: 'Sub_Status',
    width: 100,
    resizable: false,
    style: { 'whiteSpace': 'unset' },
    Filter: ({ filter, onChange }) => {
      return (
        // <div style={{ width: '90px' }}>
          <Select
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={subStatusFilter}
            onChange={(selectedItem) => handleChange(selectedItem, 'Sub_Status')}
            isMulti
            options={subStatusOptions}
            menuPortalTarget={document.body}
          />
        // </div>
      );
    }
  },
  {
    Header: () => (
      <div className="row"
        onMouseEnter={() => setIsShown(true, 8)}
        onMouseLeave={() => setIsShown(false, 8)}>
        <div className="column_m">
          Score
      </div>
        <div className="column_1">
          {sortCol && sortCol.length > 0 && sortCol[0].id === 'score' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length > 0 && sortCol[0].id === 'score' && sortCol[0].desc === true ? <IconSortDescending />
              : sortIcons[8] ? <IconSortAscending /> : ''}
        </div>
      </div>
    ),
    Filter: ({ filter, onChange }) => (
      <input
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : ""}
        placeholder="Filter Score"
        className="filter_input"
      />
    ),
    style: { "textAlign": "right" },
    accessor: 'score',
    width: 100,
    resizable: false,
    show: true
  },
  {
    Header: () => (
      <div className="cr_classification">
        CR Classification
      </div>
    ),
    style: { 'whiteSpace': 'unset' },
    accessor: 'chia_info',
    resizable: false,
    sortable: false,
    show: props.searchType === 'FILE' ? true : false,
    width: 110,
    Cell: row => {
      return (
        row.original.icons
      )
    },
    Filter: ({ filter, onChange }) => {
      return (
        <div>

        </div>
      );
    }
  },
  ]
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <ReactTable
            filterable
            data={CRsResults}
            columns={cols}
            defaultPageSize={5}
            sorted={sortCol}
            PaginationComponent={PaginationComponent}
            defaultFilterMethod={(filter, row, column) => {
              const id = filter.pivotId || filter.id;
              if (typeof filter.value === "object") {
                return row[id] !== undefined
                  ? filter.value.indexOf(row[id]) > -1
                  : false;
              }
              else {
                return row[id] !== undefined
                  ? String(String(row[id]).toLowerCase()).indexOf(String(filter.value).toLowerCase()) > -1
                  : false;
              }
            }}
            defaultSorted={props.searchTyp === 'CR' ? [{ id: "score", desc: true }] : [{
              id: "Open_Date",
              desc: true
            }]}
            onSortedChange={(newSorted, column, shiftKey) => { onSortedChange(newSorted, column, shiftKey) }}
            SubComponent={(row) => {
              return (
              <h1>sub component here{row._index}</h1>
              )
            }}
            expanded={expandedRow}
            // onExpandedChange={(newExpanded, index, event,row) =>  onExpandRow(newExpanded, index, event,row)}
            onExpandedChange={(newExpanded, index, event) => {
              //this.onDeselect(["0",{ref:'file_extension'}])
              if (newExpanded[index[0]] === false) {
                newExpanded = {}
              } else {
                Object.keys(newExpanded).map(k => {
                  newExpanded[k] = parseInt(k) === index[0] ? {} : false
                })
              }
              // setExpand(newExpanded)
              onExpandRow(newExpanded)
            }}
            onPageChange={(pageIndex) => onPageChange(pageIndex)}
            // onPageSizeChange={(pageSize, pageIndex) => onPageSizeChange(pageSize, pageIndex)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}