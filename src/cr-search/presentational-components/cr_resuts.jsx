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


export default function CRResults() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState(['SrigarSrigarSrigarSrigar SrigarSrigarSrigar Srigar', 'Sam',]);
  const [val, setVal] = useState([]);
  useEffect(() => {

  });


  const CRsResults = useSelector((state) => state.getCRsResultsReducer.payload);

  var atsData = [];
  for (let i = 0; i < 100; i++) {
    atsData.push({ name: i + 'adil', id: i + 'ides', id2: i + 'djjid', id3: i + 'bjsj' })
  }
  const toggleSelectAll = () => {

  }
  const toggleRow = (cr, original) => {

  }
  const setIsShown = (cr, original) => {

  }
  const options2 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  var sortIcons = [];
  console.log("CRsResults= ", CRsResults);
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
      <div className="row"
        onMouseEnter={() => setIsShown(true, 0)}
        onMouseLeave={() => setIsShown(false, 0)}>
        <div className="column_m">
          CR Number
        </div>
        <div className="column_1">
          {sortIcons[0] ? <IconSortDescending /> : sortIcons[0] == false ? <IconSortAscending /> : sortIcons[0] ? <IconSortAscending /> : ''}
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
    // resizable: false,
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
          {sortIcons[1] ? <IconSortDescending /> : sortIcons[1] == false ? <IconSortAscending /> : sortIcons[1] ? <IconSortAscending /> : ''}
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
          <Multiselect
            // open={true}
            placeholder="Select Type adil s"
            tagComponent={TagItem}
            data={["adojdi", "djirmjeior", "fji,rebifor", "dui jif diid dhjd longest option dat doesnt have nowrap lets see"]}
            textField='name'
          />
        </div>
      );
    }
  }

  ]
  const onSelect = (selectedList, selectedItem) => {
    console.log("selectedList= ", selectedList, selectedItem);
    var temp = [];
    selectedList.map(item => {
      temp.push({ name2: item.name, name: item.name2, id: item.id })
    })
    setVal(selectedList)
  }

  var arr = [{ name2: "adil..", name: "adil syed", id: 1 }, { name2: "sheef..", name: "sheefa ara mashalkar", id: 2 }];
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <div style={{ width: '100px' }}>
          <Multiselect
            tagComponent={TagItem}
            data={["adojdi", "djirmjeior", "fji,rebifor", "dui jif diid dhjd longest option dat doesnt have nowrap lets see"]}
            textField='name'
          />
        </div>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <ReactTable
            filterable
            data={CRsResults}
            columns={cols}
            defaultPageSize={5}
            PaginationComponent={PaginationComponent}
          //   getTheadFilterThProps={(state, rowInfo, column) => {
          //     return {
          //         style: { overflow: 'visible' }
          //     };
          // }}
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}