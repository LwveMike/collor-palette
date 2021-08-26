// node_modules imports
import styled from "styled-components";

// my imports
import Button from './Button'

export const PinkButton = styled(Button)`
    line-height: 1.75;
    padding: 4px 16px;
    transition: background-color 300ms ease;
    letter-spacing: 1px;
    box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.25);
    :hover {
        background-color: #76133F;
    }
`;


function BackButton(){
    return (
        <PinkButton bgC='#c51162' fC='white' bR='4px' fF='Roboto' fW='500' fZ='16px' >Back</PinkButton>
    );
}


export default BackButton;