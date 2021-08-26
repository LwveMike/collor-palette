// node_modules imports
import React from 'react';
import styled from 'styled-components';

// my imports
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import P from '../../components/P/P';
import Emoji from '../../components/Emoji/Emoji';
import DeleteButton from '../../components/Button/DeleteButton';


const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    padding: 2px;
    background-color: #FAF9F6;
    box-shadow: 0px 0px 40px 2px rgba(0,0,0,0.8);
    position: relative;
    cursor: pointer;

    .caption {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2px 10px;
    }
`;


function PalleteContainer(props) {

    return (
        <ThumbnailContainer>
            <Thumbnail colors={props.colors} />
            <div className="caption">
                <P bgC='inherit'>{props.palleteName}</P>
                <Emoji symbol={props.symbol}/>
            </div>
        </ThumbnailContainer>
    )


}

export default PalleteContainer;