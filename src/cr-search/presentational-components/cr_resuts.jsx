import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
// import Picky from "react-picky";
// import "react-picky/dist/picky.css";
// import ReactTable from 'react-table-6';
// import 'react-table-6/react-table.css';
import TagSelect from 'terra-form-select/lib/TagSelect';
import Checkbox from 'terra-form-checkbox';
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import Popper from "@material-ui/core/Popper";
import TextField from '@material-ui/core/TextField';
import Select, { components } from "react-select";
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import allActions from '../../redux/actions/cr_search_result_actions'


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
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState([]);
  const [render, setRender] = useState(0);
  const [sortIcons, setSortIcons] = useState([null, null, null, null, null, null, null, null, null])
  const [options, setOptions] = useState(['SrigarSrigarSrigarSrigar SrigarSrigarSrigar Srigar', 'Sam',]);
  const [val, setVal] = useState([]);
  useEffect(() => {

  });

  const dispatch = useDispatch();

  const CRsResults = useSelector((state) => state.getCRsResultsReducer.payload);
  const typeFilters = useSelector((state) => state.getTypeFilterValueReducer.payload);
  const typeOptions = useSelector((state) => state.getTypeOptionsReducer.payload);
  const solCDOptions = useSelector((state) => state.getSolCDOptionsReducer.payload);
  const solDetCDOptions = useSelector((state) => state.getSolDetCDOptionsReducer.payload);
  const statusOptions = useSelector((state) => state.getStatusOptionsReducer.payload);
  const subStatusOptions = useSelector((state) => state.getSubStatusOptionsReducer.payload);
  const sortedArrayCR = useSelector((state) => state.getSortedColReducer.sortedColCR);
  const sortedArrayFile = useSelector((state) => state.getSortedColReducer.sortedColFile);
  var sortCol = [];
  if (props.searchType === 'CR') {
    sortCol = sortedArrayCR
  } else {
    sortCol = sortedArrayFile
  }
  console.log("sortedArray= ", sortCol)
  const sortGeneral = useSelector((state) => state.getSortedColReducer);
  // console.log("sortGeneral= ", sortGeneral)

  var atsData = [];
  for (let i = 0; i < 100; i++) {
    atsData.push({ name: i + 'adil', id: i + 'ides', id2: i + 'djjid', id3: i + 'bjsj' })
  }
  const toggleSelectAll = () => {

  }
  const toggleRow = (cr, original) => {

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
  const filterFunc = (val) => {
    dispatch(resultAction.getTypeFilterValueAction(val));
  }
  const handleChange = (selectedItem) => {
    console.log("handleChange= ", selectedItem);
    setCount(selectedItem)
  }
  const optionsR = [
    { value: "oneoneone oneone", label: "oneone oneoneone oneone", chipLabel: "one.." },
    { value: "two", label: "Two", chipLabel: "two.." },
    { value: "two", label: "Two", chipLabel: "two.." },
    { value: "three", label: "Three", chipLabel: "three.." }
  ]
  const options2 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  // var sortIcons = [];
  var TagItem = ({ item }) => (
    <Tooltip title={item}>
      <span>
        <strong className="tag_filter">{item.substring(0, 6) + '..'}</strong>
      </span>
    </Tooltip>
  );
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
            <Checkbox id="firstInline" className="checkbox_results" checked={false} isLabelHidden isInline onChange={() => toggleRow(original.CR_Number2, original)} />
            // <Checkbox
            //   size="small"
            //   color="primary"
            //   style={{paddingTop:"0",display:'flex'}}
            //   checked={this.props.selectedSample[original.CR_Number2] === true}
            //   onChange={() => this.toggleRow(original.CR_Number2, original)}
            // />
          );
        },
        Header: x => {
          return (
            <Checkbox id="firstInline" className="checkbox_header" checked={false} isLabelHidden isInline onChange={toggleSelectAll} />
            // <Checkbox
            //   size="small"
            //   color="primary"
            //   style={{paddingTop:"0",display:'flex'}}
            //   checked={this.state.selectAll === 1}
            //   indeterminate={this.state.selectAll === 2}
            //   onChange={() => this.toggleSelectAll()}
            //   inputProps={{ 'aria-label': 'secondary checkbox' }}
            // />
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
            <Tooltip title="Like" aria-label="Like" placement="bottom" arrow>
              <IconFeatured
                id="icon"
                className="checkbox_results"
                //color={this.props.likeButton[original.CR_Number2] === true ? "primary" : "action" }
                //onClick={()=> this.onChangeColor(original.CR_Number2)}
                style={{ width: '25px', marginLeft: '15%', marginTop: '25%' }}
              />
            </Tooltip>
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
          {sortCol && sortCol.length>0  && sortCol[0].id === 'CR_Number' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'CR_Number' && sortCol[0].desc === true ? <IconSortDescending />
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'type' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'type' && sortCol[0].desc === true ? <IconSortDescending />
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
        <div style={{ width: '100px' }}>
          <Select
            // menuIsOpen={true}
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={count}
            onChange={handleChange}
            isMulti
            options={typeOptions}
            menuPortalTarget={document.body}
          />
        </div>
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'Summary' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'Summary' && sortCol[0].desc === true ? <IconSortDescending />
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'Open_Date' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'Open_Date' && sortCol[0].desc === true ? <IconSortDescending />
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'Solution_CD' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'Solution_CD' && sortCol[0].desc === true ? <IconSortDescending />
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
        <div>
          <Select
            // menuIsOpen={true}
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={count}
            onChange={handleChange}
            isMulti
            options={solCDOptions}
            menuPortalTarget={document.body}
          />
        </div>
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'solution_detail_cd' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'solution_detail_cd' && sortCol[0].desc === true ? <IconSortDescending />
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
        <div>
          <Select
            // menuIsOpen={true}
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={count}
            onChange={handleChange}
            isMulti
            options={solCDOptions}
            menuPortalTarget={document.body}
          />
        </div>
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'Status' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'Status' && sortCol[0].desc === true ? <IconSortDescending />
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
        <div>
          <Select
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={count}
            onChange={handleChange}
            isMulti
            options={statusOptions}
            menuPortalTarget={document.body}
          />
        </div>
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'Sub_Status' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'Sub_Status' && sortCol[0].desc === true ? <IconSortDescending />
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
        <div>
          <Select
            components={{ DropdownIndicator, MultiValue }}
            styles={{ clearIndicator: ClearIndicatorStyles }}
            value={count}
            onChange={handleChange}
            isMulti
            options={subStatusOptions}
            menuPortalTarget={document.body}
          />
        </div>
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
          {sortCol && sortCol.length>0 && sortCol[0].id === 'score' && sortCol[0].desc === false ? <IconSortAscending />
            : sortCol && sortCol.length>0 && sortCol[0].id === 'score' && sortCol[0].desc === true ? <IconSortDescending />
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
    show:props.searchType ==='FILE'?true:false,
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
  const onSelect = (selectedList, selectedItem) => {
    console.log("selectedList= ", selectedList, selectedItem);
    var temp = [];
    selectedList.map(item => {
      temp.push({ name2: item.name, name: item.name2, id: item.id })
    })
    setVal(selectedList)
  }
  // console.log("sortIcons 12233322= ", sortIcons[0]);
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
            onSortedChange={(newSorted, column, shiftKey) => { onSortedChange(newSorted, column, shiftKey) }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}