// node_modules imports
import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import chroma from 'chroma-js';



function CustomSelect({format, setFormat}) {
    const handleChange = (event) => {
        setFormat(event.target.value);
    };


    return (
        <FormControl>
            <Select
                labelId="color-format"
                id="color-format-select"
                value={format}
                onChange={handleChange}
            >
                <MenuItem value='HEX'>HEX - #ffffff</MenuItem>,
                <MenuItem value='RGB'>RGB - rgb(255, 255, 255)</MenuItem>,
                <MenuItem value='RGBA'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
            </Select>
        </FormControl>
    );

}

export default CustomSelect;