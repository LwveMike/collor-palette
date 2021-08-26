// node_modules imports
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";

// my imports
import Button from './Button'

const Overlay = styled(Button)`
    width: 32px;
    height: 32px;
    background-color: #e01b5c;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-top-right-radius: 4px;
    top: 0;
    right: 0;
`;


function DeleteButton(){
    return (
        <Overlay className='appearing'>
            <FontAwesomeIcon icon={faTrash} style={{fontSize: '20px', color: 'white'}} />
        </Overlay>
    );
}


export default DeleteButton;