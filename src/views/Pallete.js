// node_modules imports
import React, {useState, createContext} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';


// my imports
import PalleteHeader from '../components/PalleteHeader/PalleteHeader';
import PalleteBody from '../components/PalleteBody/PalleteBody';
import PalleteFooter from '../components/PalleteFooter/PalleteFooter';
import SpecificPallete from './SpecificPallete';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const PalleteContext = createContext();


const getThisPallete = (colorPalletes, id) => {
    for(let i = 0; i < colorPalletes.length; i += 1){
        if(colorPalletes[i].id == id)
            return colorPalletes[i];
    }
}


function Pallete() {

    const colorPalletes = useSelector(state => state);
    const dispatch = useDispatch();
    const {id} = useParams();

    const [format, setFormat] = useState('HEX');
    const [level, setLevel] = useState(500);
    const [thisPallete, setThisPallete] = useState(getThisPallete(colorPalletes, id));


    let providedObject = {
        level: level,
        setLevel: setLevel,
        thisPallete: thisPallete,
        setThisPallete: setThisPallete,
        format: format,
        setFormat: setFormat
    }

    return (
        <PalleteContext.Provider value={providedObject}>
        <MainContainer >
            <PalleteHeader />
            <PalleteBody />
            <PalleteFooter />
        </MainContainer>
        </PalleteContext.Provider>
    )
}

export default Pallete;