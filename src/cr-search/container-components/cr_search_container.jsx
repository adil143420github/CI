import React, { useState, useEffect } from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
// import Grid from 'terra-grid';
import Grid from '@material-ui/core/Grid';
import '../container-components/cr_search_container.scss'
import axios from 'axios';
import CRSearchBar from '../presentational-components/cr_search_bar2'
import { useDispatch, useSelector } from "react-redux";
import Sample from '../presentational-components/sample';
import allActions from "../../redux/actions/actions";
import CRResults from '../presentational-components/cr_resuts'

const titleConfig = {
    title: 'CodeInsight',
};
const userConfig = {
    name: 'Test Name',
    initials: 'TN',
};
const extensionItems = [
    {
        icon: <IconSearch />,
        key: 'item-a',
        text: 'Item A',
        metaData: {
            test: 'a',
        },
    }, {
        icon: <IconPill />,
        key: 'item-b',
        text: 'Item B',
        metaData: {
            test: 'b',
        },
    }, {
        icon: <IconVisualization />,
        key: 'item-c',
        text: 'Item C',
        metaData: {
            test: 'c',
        },
    }, {
        icon: <IconLightbulb />,
        key: 'item-d',
        text: 'Item D',
        metaData: {
            test: 'd',
        },
    },
];
const navigationItems = [
    {
        key: '/crSearch',
        text: 'CR SEARCH',
        // metaData: {
        //   display: 'Page 1',
        // },
    }, {
        key: '/fileSearch',
        text: 'FILE SEARCH',
        // metaData: {
        //   display: 'Page 2',
        // },
    }
];
const utilityItems = [
    {
        icon: <IconSearch />,
        key: 'item-a',
        text: 'Item A',
        metaData: {
            test: 'a',
        },
    }, {
        icon: <IconPill />,
        key: 'item-b',
        text: 'Item B',
        metaData: {
            test: 'b',
        },
    }, {
        icon: <IconVisualization />,
        key: 'item-c',
        text: 'Item C',
        metaData: {
            test: 'c',
        },
    }, {
        icon: <IconLightbulb />,
        key: 'item-d',
        text: 'Item D',
        metaData: {
            test: 'd',
        },
    },
];
const CRSearchContainer = ({ onAction }) => {
    const [activeKey, setActiveKey] = useState(navigationItems[0].key);
    const counter1 = useSelector((state) => state.counter);
    const [CRTypeValue, setCRTypeValue] = useState([{ id: 0, name: 'Defect' }, { id: 1, name: 'Enhancement' }]);
    const [SolutionValue, setSolutionValue] = useState([])
    const [ss, setSS] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.getAllSolutionCRIndexAction());
        dispatch(allActions.getActivationKeyAction('/crSearch'));
    }, []);
    const solutionCRIndex = useSelector((state) => state.getAllSolutionCRIndexReducer.payload);
    const activeTab = useSelector((state) => state.getActivationKeyReducer.payload);
    const cr_keywords = useSelector((state) => state.getKeywordsByCRReducer.payload);
    const tags = useSelector((state) => state.getTagsReducer.payload);
    var atsData = [];
    for (let i = 0; i < 100; i++) {
        atsData.push({ name: i + 'adil' })
    }

    const onChangeCRType = (value, flag) => {
        if (flag == 'Solution') {
            setSolutionValue(value)
        } else {
            setCRTypeValue(value);
            dispatch(allActions.getSlectedCRTypeAction(value));
        }
    }
    const onTabChange = (key) => {
        console.log("tab= ", key)
        setActiveKey(key);
        dispatch(allActions.getActivationKeyAction(key));
    }
    
    return (
        <ApplicationBase locale="en-US">
            <ApplicationNavigation
                titleConfig={titleConfig}
                userConfig={userConfig}
                extensionItems={extensionItems}
                onSelectExtensionItem={onAction}
                navigationItems={navigationItems}
                activeNavigationItemKey={activeKey}
                onSelectNavigationItem={key => onTabChange(key)}
                utilityItems={utilityItems}
                onSelectUtilityItem={onAction}
                onSelectSettings={() => onAction('settings')}
                onSelectHelp={() => onAction('help')}
                onSelectLogout={() => onAction('logout')}
            >
                {/* <Placeholder title={<Sample/>}>
        </Placeholder> */}
                {/* <Grid className="grid_container">
                    <Grid.Row className="grid_row">
                        {activeKey == '/crSearch' ?
                            <CRSearchBar />
                            :
                            <h1>file search{counter1}</h1>}
                    </Grid.Row>
                    <Grid.Row>
                        <br /><br /><br />
                    </Grid.Row>
                    <div className="footer_banner">
                        <span className="copyright">Copyright © {new Date().getFullYear()} Cerner Corporation. All rights reserved.</span>
                    </div>
                </Grid> */}
                <Grid container spacing={1} className="grid_container_ui">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        {activeTab !== undefined && activeTab === '/crSearch' ?
                            <CRSearchBar solutionCRPickyValue={SolutionValue} CRTypeValue={CRTypeValue} onChangeCRType={onChangeCRType} />
                            :
                            <CRResults searchType='FILE' />
                            }
                    </Grid>
                </Grid>
                <br /><br /><br />
                <div className="footer_banner">
                    <span className="copyright">Copyright © {new Date().getFullYear()} Cerner Corporation. All rights reserved.</span>
                </div>
            </ApplicationNavigation>
        </ApplicationBase>
    );
};
const CRSearchContainerMain = () => (
    <CRSearchContainer />
);
export default CRSearchContainerMain;
