const CRSearchBarTemplate = () => ({
     template : {
        defaultTemplate: {
            'grid-gap': '10px',
        },
        tiny: {
            'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',
            'grid-template-rows': 'auto auto auto auto auto',
            'grid-gap': '10px',
        },
        small: {
            'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',
            'grid-template-rows': 'auto auto auto auto auto auto',
            'grid-gap': '10px',
        },
        medium: {
            'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',
            'grid-template-rows': 'auto',
            'grid-gap': '10px',
        },
        large: {
            'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',
            'grid-template-rows': 'auto',
            'grid-gap': '10px',
        },
        huge: {
            'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',
            'grid-template-rows': 'auto',
            'grid-gap': '10px',
        }
    
    },
    
     region1 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 1,
            'grid-column-end': 4,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 1,
            'grid-column-end': 4,
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
    },
     region2 : {
        tiny: {
            'grid-column-start': 4,
            'grid-row-start': 1,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 4,
            'grid-row-start': 1,
            'grid-column-end': 7,
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
    },
     region3 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 2,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 2,
            'grid-column-end': 4,
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
    },
     region4 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 3,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 4,
            'grid-row-start': 2,
            'grid-column-end': 7,
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
    },
     region5 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 4,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 3,
            'grid-column-end': 4,
        },
        medium: {
            'grid-column-start': 5,
            'grid-row-start': 1,
            'grid-column-end': 5,
        },
        large: {
            'grid-column-start': 5,
            'grid-row-start': 1,
            'grid-column-end': 5,
        },
    },
     region6 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 5,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 4,
            'grid-row-start': 3,
            'grid-column-end': 7,
        },
        medium: {
            'grid-column-start': 6,
            'grid-row-start': 1,
            'grid-column-end': 6,
        },
        large: {
            'grid-column-start': 6,
            'grid-row-start': 1,
            'grid-column-end': 6,
        },
    },
     region7 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 6,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 4,
            'grid-column-end': 7,
        },
        medium: {
            'grid-column-start': 1,
            'grid-row-start': 2,
            'grid-column-end': 7,
        },
        large: {
            'grid-column-start': 1,
            'grid-row-start': 2,
            'grid-column-end': 7,
        },
    },
     region8 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 7,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 5,
            'grid-column-end': 7,
        },
        medium: {
            'grid-column-start': 1,
            'grid-row-start': 3,
            'grid-column-end': 7,
        },
        large: {
            'grid-column-start': 1,
            'grid-row-start': 3,
            'grid-column-end': 7,
        },
    },
     region9 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 8,
            'grid-column-end': 2,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 6,
            'grid-column-end': 3,
        },
        medium: {
            'grid-column-start': 1,
            'grid-row-start': 4,
            'grid-column-end': 1,
        },
        large: {
            'grid-column-start': 1,
            'grid-row-start': 4,
            'grid-column-end': 1,
        },
    },
     region10 : {
        tiny: {
            'grid-column-start': 3,
            'grid-row-start': 8,
            'grid-column-end': 6,
        },
        small: {
            'grid-column-start': 3,
            'grid-row-start': 6,
            'grid-column-end': 5,
        },
        medium: {
            'grid-column-start': 2,
            'grid-row-start': 4,
            'grid-column-end': 2,
        },
        large: {
            'grid-column-start': 2,
            'grid-row-start': 4,
            'grid-column-end': 2,
        },
    },
     region11 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 9,
            'grid-column-end': 2,
        },
        small: {
            'grid-column-start': 5,
            'grid-row-start': 6,
            'grid-column-end': 7,
        },
        medium: {
            'grid-column-start': 3,
            'grid-row-start': 4,
            'grid-column-end': 3,
        },
        large: {
            'grid-column-start': 3,
            'grid-row-start': 4,
            'grid-column-end': 3,
        },
    },
     region12 : {
        tiny: {
            'grid-column-start': 3,
            'grid-row-start': 9,
            'grid-column-end': 6,
        },
        small: {
            'grid-column-start': 2,
            'grid-row-start': 7,
            'grid-column-end': 4,
        },
        medium: {
            'grid-column-start': 4,
            'grid-row-start': 4,
            'grid-column-end': 4,
        },
        large: {
            'grid-column-start': 4,
            'grid-row-start': 4,
            'grid-column-end': 4,
        },
    },
     region13 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 10,
            'grid-column-end': 3,
        },
        small: {
            'grid-column-start': 4,
            'grid-row-start': 7,
            'grid-column-end': 7,
        },
        medium: {
            'grid-column-start': 5,
            'grid-row-start': 4,
            'grid-column-end': 7,
        },
        large: {
            'grid-column-start': 5,
            'grid-row-start': 4,
            'grid-column-end': 5,
        },
    },
     region14 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 11,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 8,
            'grid-column-end': 7,
        },
        medium: {
            'grid-column-start': 1,
            'grid-row-start': 5,
            'grid-column-end': 7,
        },
        large: {
            'grid-column-start': 1,
            'grid-row-start': 5,
            'grid-column-end': 7,
        },
    },
    region15 : {
        tiny: {
            'grid-column-start': 1,
            'grid-row-start': 12,
            'grid-column-end': 7,
        },
        small: {
            'grid-column-start': 1,
            'grid-row-start': 9,
            'grid-column-end': 7,
        },
        medium: {
            'grid-column-start': 1,
            'grid-row-start': 6,
            'grid-column-end': 7,
        },
        large: {
            'grid-column-start': 1,
            'grid-row-start': 6,
            'grid-column-end': 7,
        },
    }
})

export default CRSearchBarTemplate();