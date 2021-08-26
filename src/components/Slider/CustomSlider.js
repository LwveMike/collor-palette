// node_modules imports
import React, { useState, useContext } from 'react';
import { withStyles } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';

// my imports
import {PalleteContext} from '../../views/Pallete';

const BetterSlider = withStyles({
    root: {
        height: 4,
        width: '200px'
    },
    thumb: {
        height: 14,
        width: 14,
        backgroundColor: '#fff',
        border: '1px solid #96dbfa',
        marginTop: -4,
        marginLeft: -6,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 4,
        borderRadius: 4,
        color: 'inherit'

    },
    rail: {
        height: 4,
        borderRadius: 4,
        color: '#c7e1e3',
    },
})(Slider);


function CustomSlider() {

    const {level, setLevel} = useContext(PalleteContext);
    const [actualLevel, setActualLevel] = useState(level);
    

    return (
        <BetterSlider track={false} min={100} max={900} step={100} value={actualLevel} onChange={ (event, val) => setActualLevel(val) }  onChangeCommitted={() => setLevel(actualLevel)}/>
    );
}


export default CustomSlider;