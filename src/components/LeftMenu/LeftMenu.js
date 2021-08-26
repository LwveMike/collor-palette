// node_modules imports
import React, {useState, useRef, useContext} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Drawer from '@material-ui/core/Drawer';
import { Button } from '@material-ui/core';

// my imports
import {Overlay} from '../../components/Nav/Nav';
import H1 from '../H1/H1';
import {PinkButton} from '../Button/BackButton';
import {BlueButton} from '../Button/SaveButton';
import ColorPicker from '../ColorPicker/ColorPicker';
import {ColorsContext} from '../../views/NewPallete';


const LeftMenuContainer = styled.div`
    background-color: #F5F5F5;
    width: 384px;
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.1);
    justify-content: center;
`;

const CloseButtonContainer = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;

const ButtonsContainer = styled.div`
    width: 100%;
    padding-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}


function LeftMenu({isMenuOpened, setIsMenuOpened}) {

    const {colors, setColors} = useContext(ColorsContext);

    const closeMenu = () => setIsMenuOpened(false);

    const handleRandomColor = () => {
        let genCol = getRandomColor();
        setColors([...colors, {name: `rn${genCol}`, colorValue: genCol}]);
    }

    const handlePalleteClear = () => {
        setColors([]);
    }

    const [buttonsBlocked, setButtonsBlocked] = useState(false);
    const genRef = useRef();



    return (
        <Drawer open={isMenuOpened} variant='persistent' anchor='left' style={{overflow: 'hidden'}}>
        <LeftMenuContainer style={{overflow: 'hidden'}}>
            <CloseButtonContainer onClick={closeMenu}>
                <Overlay style={{marginRight: '20px'}}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: '#707070', fontSize: '18px' }} />
                </Overlay>
            </CloseButtonContainer>

            <H1 fZ='20px' fW='500' bgC='inherit' lS='-1px' pad='0px' tA='center'>Design Your Pallete</H1>

            <ButtonsContainer>
                <Button variant='contained' color='primary' onClick={handlePalleteClear}>Clear Pallete</Button>
                <Button variant='contained' color='secondary' ref={genRef} disabled={buttonsBlocked} onClick={handleRandomColor}>Get Random</Button>
            </ButtonsContainer>

            <ColorPicker genRef={genRef} buttonsBlocked={buttonsBlocked} setButtonsBlocked={setButtonsBlocked} />

        </LeftMenuContainer>
        </Drawer>
    );
}


export default LeftMenu;