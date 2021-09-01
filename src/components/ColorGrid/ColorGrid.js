// node_modules imports
import styled from 'styled-components';

const ColorGrid = styled.div`
    position: absolute;
    background-color: white;
    // height: calc(100vh - 80px);
    top: 48px;
    left: 0;
    bottom: 32px;
    right: 0;

    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    .flex-child {
        width: 20%;
        height: 25%;
    }

    @media (max-width: 1250px){
        .flex-child {
            width: 25%;
        }
    }

    @media (max-width: 1000px){
        .flex-child {
            width: 50%;
        }
    }

    @media (max-width: 500px){
        .flex-child {
            width: 100%;
        }
    }
  
`;

export default ColorGrid;
