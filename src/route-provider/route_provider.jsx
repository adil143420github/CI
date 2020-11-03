import React from 'react';
import {Route, Switch, BrowserRouter as Router,} from 'react-router-dom';

// import CRSearchContainerMain from '../cr-search/container-components/cr_search_container';
// import DashboardContainer from '../dashboard/contaner-components/dashboard_container';
// import DiffView from '../diff-view/diff_view';
// import HomeContainer from '../home/container-components/home_container';
// import DiffTool from '../diff-view/diff_tool';
// import CallGraph from '../call_graph/call_graph';
// import RecommendedFiles from '../recommended-files/recommended_files';
// import ImpactGraph from '../call_graph/impact_graph';
// import CRSearchResult from '../cr-search/container-components/cr_search_container';
// import TraceCrContainerIde from './../cr-search/container-components/trace_cr_container_ide'
// import TraceCRSearchResult from '../cr-search/presentational-components/trace_results_ide';

// import TraceCR from '../trace-cr/trace_cr';
import CRSearchContainerMain from '../cr-search/container-components/cr_search_container';
import Sample from '../cr-search/presentational-components/sample'
import GridExample from '../cr-search/presentational-components/materialui_Grid'

function RouteProvider(props){

        return (
            <Router>
            <Switch>
            <Route exact path="/" render={({match}) => <CRSearchContainerMain /> } />
            <Route exact path="/grid" render={({match}) => <GridExample /> } />

                {/* <Route exact path="/" render={({match}) => <CRSearchContainerMain /> } />
                <Route exact  path="/trace_result" render={props=> <TraceCrContainerIde {...props} /> } />
                <Route exact  path="/pmi" render={props=> <TraceCrContainerIde {...props} /> } />
                <Route exact  path="/ats" render={props=> <TraceCrContainerIde {...props} /> } />
                <Route exact  path="/crSearch" render={({match}) => <CRSearchContainer match={match} /> } />
                <Route exact  path="/fileSearch" render={({match}) => <CRSearchContainer match={match} /> } />
                <Route path="/my_dashboard" render={({match}) => <DashboardContainer match={match} /> } />
                <Route path="/diff_view" render={({match}) => <DiffView match={match} /> } />
                <Route path="/diff_tool" render={({match}) => <DiffTool match={match} /> } />
                <Route path="/trace_cr" render={({match}) => <TraceCR match={match} /> } />
                <Route path="/call_graph" render={({match}) => <CallGraph match={match} /> } />
                <Route path="/recommended_files" render={({match}) => <RecommendedFiles match={match} /> } />
                <Route path="/impact_graph" render={({match}) => <ImpactGraph match={match} /> } /> */}
            </Switch>
            </Router>
        )
} 
export default RouteProvider
