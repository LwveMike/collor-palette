// node_modules imports
import React, {useState} from 'react';
import { AppBar} from '@material-ui/core';
import styled from 'styled-components';
import {useParams, useHistory} from 'react-router-dom';
import chroma from 'chroma-js';

// my imports
import H1 from '../components/H1/H1';
import { AppContainer, MiniContainer } from '../components/PalleteHeader/PalleteHeader';
import {ColorPresentedBackground} from '../components/ColorPresented/ColorPresented';
import ColorGrid from '../components/ColorGrid/ColorGrid';
import CopyColor from '../components/ColorCopy/ColorCopy';
import {CopyButton} from '../components/ColorPresented/ColorPresented';


const Footer = styled.footer`
    width: 100vw;
    height: calc(100vh - 48px);
    background-color: white;
`;


function NewHeader() {

  const history = useHistory();

  const handleLocationChange = () => {
    history.push('/');
  }

    return (
        <AppBar position='static' color='white'>
            <AppContainer>
                <MiniContainer style={{ marginLeft: '28px' }}>
                    <H1 fZ='24px' style={{cursor: 'pointer'}} onClick={handleLocationChange}>ReactColorApp</H1>
                </MiniContainer>
            </AppContainer>
        </AppBar>
    )
}


const RemainingSpace = styled.div`
        position: relative;
        min-width: 250px;
        width: 20%;
        max-width: 100%;
        background-color: #222222;
        display: flex;
        justify-content: center;
        align-items: center;
  
`;

const BackButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  font-family 'Roboto', sans-serif;
  font-size: 20px;
  padding: 10px;


`;



const generateColor = (color, level) => {
    if(level === 500)
        return chroma(color).hex();
    if(level < 500)
        return chroma(color).alpha(level/1000 * 2).hex();
    return chroma(color).darken(level/1000 * 1.5).hex();
};


const Code = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
`;




function SpecificPallete() {

  const {id} = useParams();

  const history = useHistory();


  const [principalColor, setPrincipalColor] = useState(`#${id}`);

  let items = [];
  for(let i = 100; i <= 900; i += 100){
    items.push(generateColor(principalColor, i));
  }

  const [colors, setColors] = useState(items);

  const [pos, setPos] = useState({});

    return <>
    <NewHeader />
        <ColorGrid>
        { colors.map(color => {
          return <ColorPresentedBackground maxHeight={'50%'} minHeight={'10%'} bgC={color} key={color} style={{height: '50%'}} >
              <CopyButton bgC={color} >COPY</CopyButton>
          <CopyColor pos={pos} setPos={setPos} bgC={principalColor} theValue={color} level={100} format={'HEX'} />
            <Code>{color}</Code>
          </ColorPresentedBackground>
        })}
            <RemainingSpace children={<BackButton onClick={() => history.goBack()}>BACK</BackButton>} />
        </ColorGrid>
        <Footer />
    </>
}

export default SpecificPallete;