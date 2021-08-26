// node_modules imports
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// my imports
import H1 from '../../components/H1/H1';
import Button from '../../components/Button/Button';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;

`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: white;
`;


function Header() {
    return (
        <HeaderContainer>
            <H1 fC='white' bgC='inherit'>React Colors</H1>
            <Button bgC='inherit' fC='white'><CustomLink to='/pallete/new'>Create Pallete</CustomLink></Button>
        </HeaderContainer>
    )
}


export default Header;