// node_modules imports
import React, {useState, createContext} from 'react';
import styled from 'styled-components';


// my imports
import Nav from '../components/Nav/Nav';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import SortableComponent from '../components/Sortable/Sortable';

const NewPalleteContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: white;
`;

const RightSideContainer = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;

`;

export const ColorsContext = createContext();

function NewPallete() {

    const [isMenuOpened, setIsMenuOpened] = useState(true);
    const [isAlertOpened, setIsAlertOpened] = useState(false);


    const [colors, setColors] = useState([]);

    const [palleteName, setPalleteName] = useState('');


    return (<NewPalleteContainer >
        <ColorsContext.Provider value={{colors, setColors, palleteName, setPalleteName}}>
        <LeftMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} colors={colors} setColors={setColors} />  

        <RightSideContainer>
        <Nav isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} isAlertOpened={isAlertOpened} setIsAlertOpened={setIsAlertOpened}/>
            <SortableComponent colors={colors} setColors={setColors} />

        </RightSideContainer>
        </ColorsContext.Provider>
        </NewPalleteContainer>
    )
}


export default NewPallete;