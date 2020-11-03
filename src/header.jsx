import React, { useState } from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import Placeholder from 'terra-doc-template/lib/Placeholder';
// import ExampleWrapper from './ExampleWrapper';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
// import ReactTable from 'react-table-6';
// import 'react-table-6/react-table.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './ApplicationNavigationExample.scss'
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
    key: '/page_1',
    text: 'CR SEARCH',
    // metaData: {
    //   display: 'Page 1',
    // },
  }, {
    key: '/page_2',
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
const ExampleApplication = ({ onAction }) => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);
  var atsData = [];
  for (let i = 0; i < 100; i++) {
    atsData.push({ name: i + 'adil' })
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
        onSelectNavigationItem={key => setActiveKey(key)}
        utilityItems={utilityItems}
        onSelectUtilityItem={onAction}
        onSelectSettings={() => onAction('settings')}
        onSelectHelp={() => onAction('help')}
        onSelectLogout={() => onAction('logout')}
      >
        {/* <Placeholder title={}>
        </Placeholder> */}
        <div>
          <ReactTable
            data={atsData}
            columns={[{
              Header: <div className="ats_header">Recommended Test Plans from QC(ATS)</div>,
              columns: [
                {
                  Header: () => (
                    <div className="main">
                      <p className="ats_col">
                        Test Plan Name
                                                        </p>
                    </div>
                  ),
                  accessor: 'name',
                  sortable: false
                }
              ]
            }]}
            defaultPageSize={5}
          />
          <br /><br /><br />
          <div className="footer_banner">
            <span>Copyright © {new Date().getFullYear()} Cerner Corporation. All rights reserved.</span>
          </div>
        </div>


      </ApplicationNavigation>
    </ApplicationBase>
  );
};
const ExampleNavigation = () => (
  <ExampleApplication />
);
export default ExampleNavigation;
