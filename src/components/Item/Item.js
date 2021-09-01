// node_modules
import React, {useContext} from 'react';
import styled from 'styled-components';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// my imports
import {ColorsContext} from '../../views/NewPallete';



const TrashButton = styled.div`

    position: absolute;
    padding: 10px;
    right: 6px;
    bottom: 6px;
    color: white;
    transition: all 300ms ease;
    cursor: pointer;
`;

const Item = styled.div`
  display: block;
  background-color: ${props => props.bgC ? props.bgC : 'white'};
  cursor: grab;
  user-select: none;
  width: 20%;
  height: 25%;
  position: relative;
  margin: 0;

   :hover ${TrashButton} {
       transform: scale(1.1);
        color: #413700;
    }
`;



export const ColorCode = styled.div`
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props => props.fC ? props.fC : 'rgb(242, 242, 242)'};
    font-weight: ${props => props.fW ? props.fw : '600'};
    font-family: 'Roboto', sans-serif;
    position: absolute;
    left: 12px;
    bottom: 16px;
`;

function FullItem(props) {

    const {colors, setColors} = useContext(ColorsContext);

    const handleDelete = (stateArray, setStateArray, id) => {
        let filteredArray = stateArray.filter( stateColor => {
            if(`${stateColor.name}__${stateColor.colorValue}` !== id)
                return stateColor;
        });
        setStateArray(filteredArray);
    };



    return (
        <Item {...props}>
            <ColorCode>{props.cC}</ColorCode>
            <TrashButton onClick={() => handleDelete(colors, setColors, props.id)}>
                <FontAwesomeIcon icon={faTrash} style={{ fontSize: '16px' }} />
            </TrashButton>
        </Item>
    )

}




export default FullItem;