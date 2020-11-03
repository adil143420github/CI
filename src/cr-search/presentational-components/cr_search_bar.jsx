import React, { useState, useEffect } from 'react';
import Radio from 'terra-form-radio';
// import Grid from 'terra-grid';
import Grid from '@material-ui/core/Grid';
import SearchField from 'terra-search-field';
import Button from 'terra-button/lib/Button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import Collapse from "@kunukn/react-collapse";
import Tooltip from '@material-ui/core/Tooltip';
import { Zoom, Paper } from '@material-ui/core';
import Picky from "react-picky";
import axios from 'axios'
// import ReactTable from 'react-table-6';
// import 'react-table-6/react-table.css';
import "react-picky/dist/picky.css";
import '../presentational-components/cr_search_bar.scss'
import '../presentational-components/collapsable.scss'
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions/actions";
import searchResultActions from "../../redux/actions/cr_search_result_actions";
import TagSelect from 'terra-form-select/lib/TagSelect';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import IconXSymbol from 'terra-icon/lib/icon/IconXSymbol';
import IconPaperFolded from 'terra-icon/lib/icon/IconPaperFolded';
import IconUpload from 'terra-icon/lib/icon/IconUpload';
import IconDownload from 'terra-icon/lib/icon/IconDownload';
import Checkbox from 'terra-form-checkbox';
import CRResults from '../presentational-components/cr_resuts';
import CRSearchBarTemplate from '../../utils/cr_search_bar_template'
import DynamicGrid from 'terra-dynamic-grid';
import Region from 'terra-dynamic-grid/lib/Region';
import qs from 'qs';




function CRSearchBar(props) {
    const [radioValue, setRadioValue] = useState('cr');
    const [solutionCRPickyValue, setSolutionCRPickyValue] = useState([]);
    const [solutionCRPickyOptions, setSolutionCRPickyOptions] = useState([]);
    const [CRTypeOptions, setCRTypeOptions] = useState([{ id: 0, name: 'Defect' }, { id: 1, name: 'Enhancement' }, { id: 2, name: 'Issue Investigation' }, { id: 3, name: 'Story' }]);
    const [toggle1Selection, setToggle1Selection] = useState(true);
    const [collapseTags, setCollapseTags] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const [changeFlag, setChangeFlag] = useState(0);
    const [render, setRender] = useState(0);
    const [error, setError] = useState('cr_number_field');
    const [data11, setData1] = useState([]);
    const cr_keywords = useSelector((state) => state.getKeywordsByCRReducer.payload);
    const loader = useSelector((state) => state.getLoaderReducer);

    useEffect(() => {
        // if (cr_keywords && (cr_keywords.length == 0 || cr_keywords.length > 0)) {
        //     setLoader(false);
        // }
    });

    const dispatch = useDispatch();
    const counter1 = useSelector((state) => state.counter);
    const dat = useSelector((state) => state.customAsyncData);
    const emp = useSelector((state) => state.getAllEmp.payload);
    const solutionCRIndex = useSelector((state) => state.getAllSolutionCRIndexReducer.payload);
    const selectedSol = useSelector((state) => state.getselectedSolCRReducer.payload);
    const cr_number = useSelector((state) => state.getCRNumberReducer.payload);
    // const tags = useSelector((state) => state.getTagsReducer.payload);
    const tagsUpdated = useSelector((state) => state.getIntroductoryCRUpdateKeywordsReducer.payload);
    const suggestions = useSelector((state) => state.getSuggestedKeywordsReducer.payload);
    const collapseFlag = useSelector((state) => state.getCollapseReducer.payload);
    const collapseBox = useSelector((state) => state.getCollapseExpandReducer.payload);
    const intoductoryCR = useSelector((state) => state.getIntroductoryCRReducer.payload);
    const intoductoryCheckBox = useSelector((state) => state.getIntroductoryChexkBoxReducer);
    var suggestedTags = [];
    suggestions && suggestions.map(item => {
        suggestedTags.push(<TagSelect.Option value={item} display={item} />)
    })





    const onSearchTypeChange = (e) => {
        setRadioValue(e.target.value);
        props.onChangeCRType([], 'Solution');
        props.onChangeCRType([{ id: 0, name: 'Defect' }, { id: 1, name: 'Enhancement' }], 'CRType');
        let sortedSolutionOptions = solutionCRIndex;
        sortedSolutionOptions.sort((a, b) => (a.name > b.name) ? 1 : -1)
        dispatch(allActions.getCollapseExpanAction(false));
    }
    const handleClose = () => {
        dispatch(allActions.getSlectedSolutionCRAction(solutionCRPickyValue && solutionCRPickyValue.length > 0 ? solutionCRPickyValue : selectedSol && selectedSol.length > 0 ? selectedSol : []));
        let sortedSolutionOptions = solutionCRIndex;
        sortedSolutionOptions.sort((a, b) => (a.name > b.name) ? 1 : -1)
        if (props.solutionCRPickyValue && props.solutionCRPickyValue.length > 0) {
            props.solutionCRPickyValue.map(item => {
                let index = sortedSolutionOptions.indexOf(item)
                sortedSolutionOptions.splice(index, 1);
                sortedSolutionOptions.splice(0, 0, item);
            })
        }

    }
    const selectMultipleOption = value => {
        setChangeFlag(1);
        setSolutionCRPickyValue(value);
        props.onChangeCRType(value, 'Solution');
        let sortedSolutionOptions = solutionCRIndex;
        if (value.length == 0) {
            sortedSolutionOptions.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        //dispatch(allActions.getTagsAction([]));
        dispatch(allActions.getIntroductoryCRUpdateKeywordsAction(cr_number,[],'0'));
    };
    const onCRChange = (e) => {
        dispatch(allActions.getCRNumberAction(e.target.value));
        //dispatch(allActions.getTagsAction([]));
        dispatch(allActions.getIntroductoryCRUpdateKeywordsAction(cr_number,[],'0'));
    }
    const onSearchCRs = () => {
        dispatch(allActions.getLoaderAction(true));
        let crtypes=[];
        props.CRTypeValue.map(item=>{
            crtypes.push(item.name)
        });
        var Obj = {              
            crtype: crtypes, 
            solution: '',
             keyword:tagsUpdated.toString()
        }; 
        dispatch(searchResultActions.getCRsResultsAction(Obj));
        //dispatch(searchResultActions.getCRsResultsAction('',tagsUpdated.toString(),crtypes));
    }
    const handleSearchConnect = (e) => {
        if (cr_number != undefined && cr_number !== '') {
            dispatch(allActions.getLoaderAction(true));
            setError('cr_number_field')
            //dispatch(allActions.getKeywordsByCRAction(cr_number));
            setCollapseTags(true);
            setCollapse(true);
            dispatch(allActions.getIntroductoryCRUpdateKeywordsAction(cr_number,[]));
        } else if ((cr_number == undefined || cr_number === '')) {
            setError('cr_number_field error')
        }
    }
    const handleSearch = (e) => {
        if (e.key === 'Enter' && cr_number != undefined && cr_number !== '') {
            dispatch(allActions.getLoaderAction(true));
            setError('cr_number_field')
            //dispatch(allActions.getKeywordsByCRAction(cr_number));
            setCollapseTags(true);
            setCollapse(true);
            dispatch(allActions.getIntroductoryCRUpdateKeywordsAction(cr_number,[],'1'));
        } else if (e.key === 'Enter' && (cr_number == undefined || cr_number === '')) {
            setError('cr_number_field error')
        }

    }
    const onChangeCRType = (value) => {
        setChangeFlag(1);
        props.onChangeCRType(value, 'CRType')
        //dispatch(allActions.getTagsAction([]));
        dispatch(allActions.getIntroductoryCRUpdateKeywordsAction(cr_number,[],'0'));
    }

    const handleToggleOneOnChange = () => {
        setToggle1Selection(!toggle1Selection)
    }
    const onCollapse = () => {
        if (collapseFlag) {
            dispatch(allActions.getCollapseAction(false));
        } else {
            dispatch(allActions.getCollapseAction(true));
        }
    }
    const onDeselectTag = (value) => {
        var t = tagsUpdated;
        var index = t.indexOf(value);
        t.splice(index, 1);
        dispatch(allActions.getTagsAction(t));
        setRender(!render)
    }
    const onSelectTag = (value) => {
        var t;
        if (tagsUpdated == undefined) {
            t = []
        } else {
            t = tagsUpdated
        }
        t.push(value)
        dispatch(allActions.getTagsAction(t));
        setRender(!render)
    }
    const onUpdateKeywords =(cr) =>{
        if(intoductoryCheckBox){
            dispatch(allActions.getLoaderAction(true));
        dispatch(allActions.getIntroductoryCRUpdateKeywordsAction(cr,tagsUpdated));
        }else{
            dispatch(allActions.getLoaderAction(true));
            dispatch(allActions.getIntroductoryCRUpdateKeywordsAction(cr_number,[]));
        }
    }
    const onIntroductoryCR = () => {
        dispatch(allActions.getIntroductoryCheckBoxAction());  
    }
    const keywordSuggestion = (e) => {
        dispatch(allActions.getSuggestedKeywordsAction(e));
    }
    ///final dispatches

    var atsData = [];
    for (let i = 0; i < 100; i++) {
        atsData.push({ name: i + 'adil' })
    }

    //required data operation
    var solutionTooltip = ''
    if (props.solutionCRPickyValue && props.solutionCRPickyValue.length > 0) {
        props.solutionCRPickyValue.map(item => {
            solutionTooltip = solutionTooltip + item.name + ','
        })
        solutionTooltip = solutionTooltip.slice(0, -1)
    }
    var crTypeTooltip = '';
    if (props.CRTypeValue && props.CRTypeValue.length == 2 &&
        (props.CRTypeValue[0].name == "Defect" || props.CRTypeValue[0].name == "Enhancement")
        && (props.CRTypeValue[1].name == "Defect" || props.CRTypeValue[1].name == "Enhancement")) {
        crTypeTooltip = 'Defect and Enhancement CR types are selected by default'
    }
    else {
        props.CRTypeValue.map(item => {
            crTypeTooltip = crTypeTooltip + item.name + ', '
        })
        crTypeTooltip = crTypeTooltip.slice(0, -1)
        crTypeTooltip = crTypeTooltip.slice(0, -1) + ' CR types are selected'
    }
    console.log("loader = ", loader)
    return (
        <React.Fragment className="divadil">
            <Paper>
            <Grid container spacing={1} className="grid_container_ui">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="radio_btn_row" >
                    <Radio onChange={onSearchTypeChange} value='cr' id="first-inline" labelText="Search By CR" name="inline-example" isInline defaultChecked />
                    <Radio onChange={onSearchTypeChange} id="second-inline" value='keyword' labelText="Search By Keyword" name="inline-example" isInline />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Tooltip title={solutionTooltip} TransitionComponent={Zoom} placement='top' arrow>
                        <div>
                            <Picky
                                value={props.solutionCRPickyValue}
                                options={solutionCRIndex}
                                onChange={selectMultipleOption}
                                open={false}
                                valueKey="id"
                                labelKey="name"
                                multiple={true}
                                includeSelectAll={true}
                                includeFilter={true}
                                manySelectedPlaceholder={"%s solutions selected"}
                                placeholder={<span className="items-not-selected">Select Solution</span>}
                                onClose={handleClose}
                                numberDisplayed={1}
                                renderSelectAll={({
                                    filtered,
                                    tabIndex,
                                    allSelected,
                                    toggleSelectAll,
                                    multiple,
                                }) => {
                                    // Don't show if single select or items have been filtered.
                                    if (multiple && !filtered) {
                                        return (
                                            <div
                                                tabIndex={tabIndex}
                                                role="option"
                                                className={allSelected ? 'option selected  picky_select_all_selected' : 'option picky_select_all'}
                                                onClick={toggleSelectAll}
                                                onKeyPress={toggleSelectAll}
                                            >
                                                <input type="checkbox" checked={allSelected} readOnly />
                      Select all Solutions
                                            </div>
                                        );
                                    }
                                }}
                            />
                        </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Tooltip title={crTypeTooltip} TransitionComponent={Zoom} placement='top' arrow>
                        <div>
                            <Picky
                                value={props.CRTypeValue}
                                options={CRTypeOptions}
                                onChange={onChangeCRType}
                                open={false}
                                valueKey="id"
                                labelKey="name"
                                manySelectedPlaceholder={"%s CR Types selected"}
                                allSelectedPlaceholder={"%s CR Types selected"}
                                multiple={true}
                                includeSelectAll={true}
                                includeFilter={true}
                                placeholder={<span className="items-not-selected">Select CR Type</span>}
                                onClose={handleClose}
                                numberDisplayed={1}
                                renderSelectAll={({
                                    filtered,
                                    tabIndex,
                                    allSelected,
                                    toggleSelectAll,
                                    multiple,
                                }) => {
                                    // Don't show if single select or items have been filtered.
                                    if (multiple && !filtered) {
                                        return (
                                            <div
                                                tabIndex={tabIndex}
                                                role="option"
                                                className={allSelected ? 'option selected  picky_select_all_selected' : 'option picky_select_all'}
                                                onClick={toggleSelectAll}
                                                onKeyPress={toggleSelectAll}
                                            >
                                                <input type="checkbox" checked={allSelected} readOnly />
                          Select all CR types
                                            </div>
                                        );
                                    }
                                }}
                            />
                        </div>
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                    <SearchField value={cr_number} onKeyPress={handleSearch} className={error} placeholder="Enter Valid CR Number*" onChange={onCRChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Button className="connect_btn" onClick={() => handleSearchConnect(cr_number)} icon={<IconSearch />} text="CONNECT" variant="emphasis" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    {collapseBox ?
                        <span className="commonfont">
                            Introduced by CR#: {intoductoryCR && intoductoryCR!= undefined && intoductoryCR.length > 0 ?
                                <span className="commonfont">
                                    <Checkbox id="firstInline" checked={intoductoryCheckBox} labelText={intoductoryCR} isInline onChange={onIntroductoryCR} />&nbsp;&nbsp;
                                    <Button className="clear_keyword_btn" onClick={() => onUpdateKeywords(intoductoryCR)} icon={<IconDownload />} text="UPDATE KEYWORDS" variant="ghost" />
                                </span>
                                 : "No data available!"}
                        </span> : ""}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    {collapseBox ||1 ?
                        < div className="collapse_border">
                            <Button onClick={onCollapse} text="Keywords " variant="ghost" icon={!collapseFlag ? <IconChevronDown /> : <IconChevronUp />} className="keywords_btn" isReversed />
                            <Collapse
                                isOpen={collapseFlag}
                                className={
                                    "app__collapse app__collapse--gradient " +
                                    (collapseTags ? "app__collapse--active" : "")
                                }
                            >
                                <TagSelect value={tagsUpdated && tagsUpdated.length > 0 ? tagsUpdated : []} onSearch={keywordSuggestion} onSelect={onSelectTag} onDeselect={onDeselectTag} placeholder="Add Keywords*">
                                    {suggestedTags}
                                </TagSelect>
                            </Collapse>
                        </div >
                        : ''}
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2} xl={1} >
                    {collapseBox ||1 ?
                        <Button className="search_crs_btn" onClick={onSearchCRs} icon={<IconSearch />} text="SEARCH CRs" variant="emphasis" />
                        : ''}
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2} xl={1} >
                    {collapseBox ||1 ?
                        <Button className="clear_keyword_btn" onClick={() => handleSearchConnect(cr_number)} icon={<IconXSymbol />} text="CLEAR KEYWORDS" variant="ghost" />
                        : ''}
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2} xl={1} >
                    <Button className="export_btn" onClick={() => handleSearchConnect(cr_number)} icon={<IconDownload />} text="EXPORT RESULTS" variant="ghost" />
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2} xl={1} >
                    <Button className="pushtojira_btn" onClick={() => handleSearchConnect(cr_number)} icon={<IconUpload />} text="PUSH CRs TO JIRA" variant="ghost" />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={2} xl={1} >
                    <Button className="get_mod_file_btn" onClick={() => handleSearchConnect(cr_number)} icon={<IconPaperFolded />} text="GET MODIFIED FILES" variant="ghost" />
                </Grid>
                {loader ? <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="loader_row">
                    <IconSpinner className="portal_loader" />
                </Grid>
                    : ''}
                <Grid xs={12} lg={12} xl={12} md={12} sm={12} className="cr_results_grid" >
                    <Paper className="grid_container_result_paper">
                        <CRResults/>
                    </Paper>
                </Grid>
            </Grid>
            </Paper>
        </React.Fragment>
    )
}
export default CRSearchBar
