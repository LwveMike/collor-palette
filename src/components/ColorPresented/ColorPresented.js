// node_modules imports
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';

// my imports
import { ColorCode } from '../Item/Item';
import ColorCopy from '../../components/ColorCopy/ColorCopy';


export const getColorByBgColor = (bgColor) => {
    if (!bgColor) { return ''; }
    return (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2 ? 'rgba(0, 0, 0, 0.7)' : 'rgb(242, 242, 242)');
}

export const MoreButton = styled.button`
    padding: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    color: ${props => getColorByBgColor(props.bgC, props.level)};
    font-family: 'Roboto', sans-serif;
    border: none;
    position: absolute;
    
    bottom: 0;
    right: 0;

    
`;


export const CopyButton = styled(MoreButton)`
    right: 50%;
    bottom: 50%;
    transform: translate(50%,50%);
    opacity: 0;
    transition: opacity 350ms ease;
    pointer-events: none;
    cursor: pointer;
    

`;


export const ColorPresentedBackground = styled.div`
    position: relative;
    min-width: 250px;
    width: 20%;
    max-width: 100%;

    max-height: ${props => props.maxHeight ? props.maxHeight : '25%'};
    min-height: ${props => props.minHeight ? props.minHeight : '5%'};;

    cursor: pointer;
    background-color: ${props => props.bgC ? props.bgC : '#222222'};
    // border: 1px solid white;


    :hover ${CopyButton}{
        opacity: 1;
    }


`;

const BetterColorCode = styled(ColorCode)`
    color: ${props => getColorByBgColor(props.bgC, props.level)};
    pointer-events: none;
`;




const generateColor = (color, level) => {
    if(level === 500)
        return chroma(color).hex();
    if(level < 500)
        return chroma(color).alpha(level/1000 * 2).hex();
    return chroma(color).darken(level/1000 * 1.5).hex();
}



function ColorPresented(props) {

    const [actualColor, setActualColor] = useState({
        initialValue: props.bgC,
        value: generateColor(props.bgC, props.level)});

    const [pos, setPos] = useState({});

    useEffect(() => {
        setActualColor({...actualColor, value: generateColor(actualColor.initialValue, props.level)});

    }, [props.level]);

    return (
        <ColorPresentedBackground maxHeight={props.maxHeight} minHeight={props.minHeight} className="flex-child" bgC={actualColor.value}>
        <ColorCopy pos={pos} setPos={setPos} bgC={actualColor.initialValue} theValue={actualColor.value} level={props.level} format={props.format} />
            <BetterColorCode fW={300} bgC={actualColor.value}>{`${props.name} ${props.level}`}</BetterColorCode>
            <Link to={`/specificcolor/${actualColor.initialValue.replace('#', '')}`}><MoreButton bgC={actualColor.value}>MORE</MoreButton></Link>
            <CopyButton bgC={actualColor.value}>COPY</CopyButton>
        </ColorPresentedBackground >
    );
}


export default ColorPresented;