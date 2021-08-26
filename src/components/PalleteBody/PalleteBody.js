// node_modules
import React, {useState, useContext, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux'
import chroma from 'chroma-js';

// my imports
import ColorGrid from '../ColorGrid/ColorGrid';
import ColorPresented from '../ColorPresented/ColorPresented';
import { PalleteContext } from '../../views/Pallete';


function PalleteBody() {
  const generateColor = (color, level) => {
    if(level === 500)
        return chroma(color).hex();
    if(level < 500)
        return chroma(color).alpha(level/1000 * 2).hex();
    return chroma(color).darken(level/1000 * 1.5).hex();
};

    const {thisPallete, level, format} = useContext(PalleteContext);
    return <ColorGrid>

    {
        thisPallete.colors.map( color => {

            return <ColorPresented key={`${color.name}__${color.colorValue}`} className="flex-child" bgC={color.colorValue} name={color.name}  level={level} format={format}  >
            </ColorPresented>
        })
    }

    </ColorGrid>
}



export default PalleteBody;