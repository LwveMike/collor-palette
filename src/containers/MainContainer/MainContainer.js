// node_modules imports
import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// my imports
import PalleteContainer from '../PalleteContainer/PalleteContainer';
import DeleteButton from '../../components/Button/DeleteButton';
import {deletePallete} from '../../features/actions';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import PalleteItem from '../../components/PalleteItem/PalleteItem';

const PalleteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 40px;
    max-width: 840px;

    .palleteWrapper {
        position: relative; 
        .delete-button {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 100;
            opacity: 0;
            transition: opacity 500ms ease;
        }

        :hover .delete-button {
            opacity: 1;
        }
             
    }



`;

function MainContainer() {
    const colorsPallete = useSelector(state => state);
    const dispatch = useDispatch();
    
    return (
        <PalleteGrid>

            {
                colorsPallete.map( (colorObject) => {    
                    return <PalleteItem key={colorObject.id} colorObject={colorObject} />
                })
            }

        </PalleteGrid>
    )


}

export default MainContainer;