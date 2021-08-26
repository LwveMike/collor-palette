// node_modules
import React, {useContext} from 'react';
import { AppBar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

// my imports
import Slider from '../Slider/CustomSlider';
import H1 from '../H1/H1';
import P from '../P/P';
import Select from '../Select/CustomSelect';
import { PalleteContext } from '../../views/Pallete';

export const AppContainer = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MiniContainer = styled.div`
    display: flex;
    height: 48px;
    border-right: 1px solid rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
    padding-right: 24px;
`;

function PalleteHeader() {

    const {level, setLevel, format, setFormat} = useContext(PalleteContext);
    const history = useHistory();
 
    return (
        <AppBar position='static' style={{backgroundColor: 'white'}}>
            <AppContainer>
                <MiniContainer style={{ marginLeft: '28px' }} onClick={() => history.push('/')} >
                    <H1 fZ='24px' style={{cursor: 'pointer'}}>ReactColorApp</H1>
                </MiniContainer>
                <MiniContainer style={{ marginRight: '400px' }}>
                    <P style={{ marginRight: '30px' }}>Level {level}</P>
                    <Slider />
                </MiniContainer>
                <MiniContainer style={{ marginRight: '64px' }} >
                    <Select format={format} setFormat={setFormat}/>
                </MiniContainer>
            </AppContainer>
        </AppBar>
    )
}

export default PalleteHeader;