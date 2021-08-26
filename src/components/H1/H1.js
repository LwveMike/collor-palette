// node_modules imports
import styled from "styled-components";

const H1 = styled.h1`
    font-family: 'Roboto Mono', sans-serif;
    font-size: ${props => props.fZ ? props.fZ : '32px'};
    letter-spacing: ${props => props.lS ? props.lS : '-2px'};;
    font-weight: ${props => props.fW ? props.fW : '900'};
    padding: ${props => props.pad ? props.pad : '6px 36px'};
    text-align: ${props => props.tA ? props.tA : 'left'};

    background-color: ${props => props.bgC ? props.bgC : 'white'};
    color: ${props => props.fC ? props.fC : 'black'};
`;

export default H1;