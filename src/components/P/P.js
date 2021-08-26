// node_modules imports
import styled from "styled-components";

const P = styled.p`
    font-family: 'Times New Roman', sans-serif;
    font-size: 18px;
    font-weight: 300;
    padding: 2px 4px;

    background-color: ${props => props.bgC ? props.bgC : 'white'};
    color: ${props => props.fC ? props.fC : 'black'};
`;

export default P;