// node_modules
import React, {useContext} from 'react';
import styled from 'styled-components'

// my imports
import P from '../P/P';
import Emoji from '../Emoji/Emoji';
import {PalleteContext} from '../../views/Pallete';


const FooterContainer = styled.footer`
position: absolute;
bottom: 0;
    height: 32px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 60px;
`;


function PalleteFooter() {

    const {thisPallete} = useContext(PalleteContext);


    return <FooterContainer>
        <P>{thisPallete.palleteName}</P>
        <Emoji symbol={thisPallete.emoji} />
    </FooterContainer>
}

export default PalleteFooter;