// node_modules imports
import styled from 'styled-components';

const ColorGrid = styled.div`
    position: absolute;
    background-color: white;
    top: 48px;
    left: 0;
    bottom: 32px;
    right: 0;

    display: flex;
    flex-wrap: wrap;

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
