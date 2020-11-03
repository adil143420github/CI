import React, { useState } from 'react';
import { getRoles } from '@testing-library/react';
// import Grid from '@material-ui/core/Grid';
import Grid from 'terra-grid';
import Picky from "react-picky";
import "react-picky/dist/picky.css";
// import ReactTable from 'react-table-6';
// import 'react-table-6/react-table.css';
// import '../../../node_modules/terra-grid/lib/Grid.module.scss'
// import '../../../node_modules/terra-grid/src/Grid.module.scss'
import DynamicGrid from 'terra-dynamic-grid';
import Region from 'terra-dynamic-grid/lib/Region';
import CRSearchBarTemplate from '../../utils/cr_search_bar_template'

const template = {
    defaultTemplate: {
        'grid-gap': '10px',
    },
    tiny: {
        'grid-template-columns': 'auto',
        'grid-template-rows': 'auto auto',
    },
    small: {
        'grid-template-columns': '1fr 1fr',
        'grid-template-rows': 'auto',
    },
    medium: {
        'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
        'grid-template-rows': 'auto',
        'grid-gap': '10px',
    },
    large: {
        'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
        'grid-template-rows': 'auto',
        'grid-gap': '10px',
    },
    huge: {
        'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
        'grid-template-rows': 'auto',
        'grid-gap': '10px',
    }

};

const region1 = {
    tiny: {
        'grid-column-start': 1,
        'grid-row-start': 1,
        'grid-column-end': 4,
    },
    small: {
        'grid-column-start': 1,
        'grid-row-start': 1,
        'grid-column-end': 2,
    },
    medium: {
        'grid-column-start': 1,
        'grid-row-start': 1,
        'grid-column-end': 1,
    },
    large: {
        'grid-column-start': 1,
        'grid-row-start': 1,
        'grid-column-end': 1,
    },
};
const region2 = {
    tiny: {
        'grid-column-start': 1,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    small: {
        'grid-column-start': 2,
        'grid-row-start': 1,
        'grid-column-end': 4,
    },
    medium: {
        'grid-column-start': 2,
        'grid-row-start': 1,
        'grid-column-end': 2,
    },
    large: {
        'grid-column-start': 2,
        'grid-row-start': 1,
        'grid-column-end': 2,
    },
};
const region3 = {
    tiny: {
        'grid-column-start': 1,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    small: {
        'grid-column-start': 1,
        'grid-row-start': 2,
        'grid-column-end': 2,
    },
    medium: {
        'grid-column-start': 3,
        'grid-row-start': 1,
        'grid-column-end': 3,
    },
    large: {
        'grid-column-start': 3,
        'grid-row-start': 1,
        'grid-column-end': 3,
    },
};
const region4 = {
    tiny: {
        'grid-column-start': 1,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    small: {
        'grid-column-start': 2,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    medium: {
        'grid-column-start': 4,
        'grid-row-start': 1,
        'grid-column-end': 4,
    },
    large: {
        'grid-column-start': 4,
        'grid-row-start': 1,
        'grid-column-end': 4,
    },
};
const region5 = {
    tiny: {
        'grid-column-start': 1,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    small: {
        'grid-column-start': 2,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    medium: {
        'grid-column-start': 4,
        'grid-row-start': 1,
        'grid-column-end': 4,
    },
    large: {
        'grid-column-start': 5,
        'grid-row-start': 1,
        'grid-column-end': 5,
    },
};
const region6 = {
    tiny: {
        'grid-column-start': 1,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    small: {
        'grid-column-start': 2,
        'grid-row-start': 2,
        'grid-column-end': 4,
    },
    medium: {
        'grid-column-start': 4,
        'grid-row-start': 1,
        'grid-column-end': 4,
    },
    large: {
        'grid-column-start': 1,
        'grid-row-start': 2,
        'grid-column-end': 6,
    },
};




export default function GridExample() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    var atsData = [];
    for (let i = 0; i < 100; i++) {
        atsData.push({ name: i + 'adil' })
    }

    return (
        // <DynamicGrid defaultTemplate={template.defaultTemplate} tiny={template.tiny} small={template.small} medium={template.medium} large={template.large} huge={template.huge}>
        //     <DynamicGrid.Region {...region1}>
        //         <Picky>Region 1</Picky>
        //     </DynamicGrid.Region>
        //     <DynamicGrid.Region {...region2}>
        //         <Picky>Region 2</Picky>
        //     </DynamicGrid.Region>
        //     <DynamicGrid.Region {...region3}>
        //         <Picky>Region 1</Picky>
        //     </DynamicGrid.Region>
        //     <DynamicGrid.Region {...region4}>
        //         <Picky>Region 2</Picky>
        //     </DynamicGrid.Region>
        // </DynamicGrid>

        <DynamicGrid defaultTemplate={template.defaultTemplate}
         tiny={template.tiny} 
         small={template.small} 
         medium={template.medium} 
         large={template.large} 
         huge={template.huge}>
            <DynamicGrid.Region {...region1}>
                <Picky>Region 1</Picky>
            </DynamicGrid.Region>
            <DynamicGrid.Region {...region2}>
                <Picky>Region 2</Picky>
            </DynamicGrid.Region>
            <DynamicGrid.Region {...region3}>
                <Picky>Region 1</Picky>
            </DynamicGrid.Region>
            <DynamicGrid.Region {...region4}>
                <Picky>Region 2</Picky>
            </DynamicGrid.Region>
            <DynamicGrid.Region {...region5}>
                <Picky>Region 2</Picky>
            </DynamicGrid.Region>
            <DynamicGrid.Region {...region6}>
                <Picky>Region 2</Picky>
            </DynamicGrid.Region>
        </DynamicGrid>
    );
}