// node_modules imports
import styled from "styled-components";


const Button = styled.button`
    font-family: ${props => props.fF ? props.fF : 'Lato'};
    font-size: ${props => props.fZ ? props.fZ : '20px'};;
    font-weight: ${props => props.fW ? props.fW : '400'};;
    padding: 4px 16px;
    outline: none;
    border: none;
    cursor: pointer;

    background-color: ${props => props.bgC ? props.bgC : 'white'};
    color: ${props => props.fC ? props.fC : 'black'};
    border-radius: ${props => props.bR ? props.bR : '0px'}; 
`;

export default Button;