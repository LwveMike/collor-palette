// node_modules imports
import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@material-ui/core";

// my imports
import H1 from '../H1/H1';
import DialogAlert from '../../components/DialogAlert/DialogAlert';
import { ColorsContext } from '../../views/NewPallete';
import { createPallete } from '../../features/actions';


const NavContainer = styled.div`
    height: 64px;
    width: 100%;
    position: relative;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Navigation = styled.div`
     height: 64px;
     width: 100%;
     background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 295px;
`;

const MiniContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
`;

export const Overlay = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: background-color 300ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;

    :hover {
        background-color: #EBEBEB;
    }
`;

function Nav({isMenuOpened, setIsMenuOpened, setIsAlertOpened, isAlertOpened}) {

    const openMenu = () => setIsMenuOpened(true);

    const handleClickOpen = () => setIsAlertOpened(true);

    const {colors, setColors} = useContext(ColorsContext);
    const history = useHistory();


    const handlePalleteClear = () => {
        setColors([]);
    }

    const handleRedirect = () => {
        handlePalleteClear();
        return history.push('/');
    }

    return (<NavContainer>
        <Navigation>
        <MiniContainer>
            <Overlay onClick={openMenu} style={{visibility: isMenuOpened === true ? 'hidden' : 'visible'}}>
                <FontAwesomeIcon icon={faBars} style={{fontSize: '20px'}} />
            </Overlay>
            <H1 fZ='24px' fW='400' bgC='inherit' lS='-1px' pad='50px'>Design Your Pallete</H1>
        </MiniContainer>
        <MiniContainer>
        <Button variant='contained' color='secondary' style={{marginRight: '18px'}}  onClick={handleRedirect}>Back</Button>
        <Button variant='contained' color="primary" onClick={handleClickOpen}>Save</Button>
        </MiniContainer>
        </Navigation>
         <DialogAlert isAlertOpened={isAlertOpened} setIsAlertOpened={setIsAlertOpened} />
            </NavContainer>)
}

export default Nav;