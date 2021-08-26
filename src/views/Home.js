// node_modules imports
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

// my imports
import MainContainer from '../containers/MainContainer/MainContainer';
import Header from '../containers/Header/Header';



const HomeCover = styled.div`
    max-width: 840px;
    margin: 40px auto;
`;


function Home() {

    return (<>
        <HomeCover>
            <Header  />
            <MainContainer />
        </HomeCover>
    </>)
}

export default Home;