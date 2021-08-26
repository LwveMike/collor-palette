// node_modules imports
import styled from "styled-components";

// my imports
import Button from './Button'

export const BlueButton = styled(Button)`
    line-height: 1.75;
    padding: 4px 12px;
    transition: background-color 300ms ease;
    letter-spacing: 1px;
    margin-left: 14px;
    box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.25);
    :hover {
        background-color: #1A2463;
    }
`;


function SaveButton(){
    return (
        <BlueButton bgC='#303F9F' fC='white' bR='4px' fF='Roboto' fW='500' fZ='16px' >Save</BlueButton>
    );
}


export default SaveButton;