// node_modules imports
import styled, { css } from "styled-components";

function Thumbnail(props) {

    const createCSS = () => {
        let styles = '';
        for (let i = 0; i < props.colors.length; i++) {
            styles += `.color${i} { 
                background-color: ${props.colors[i].colorValue};
            }`;
        }

        return css`${styles}`;
    };

    const ColorsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(4,25px);
    padding: 0px 0px 6px 0px;
    width: 250px;
    background-color: grey;
    border-radius: 5px;

    .color0 {
        border-top-left-radius: 5px;
    }

    .color4 {
        border-top-right-radius: 5px;
    }

    ${createCSS()};

`;


    return (
        <ColorsContainer>
            <div className='color0 colorClass'></div>
            <div className='color1 colorClass'></div>
            <div className='color2 colorClass'></div>
            <div className='color3 colorClass'></div>
            <div className='color4 colorClass'></div>

            <div className='color5 colorClass'></div>
            <div className='color6 colorClass'></div>
            <div className='color7 colorClass'></div>
            <div className='color8 colorClass'></div>
            <div className='color9 colorClass'></div>

            <div className='color10 colorClass'></div>
            <div className='color11 colorClass'></div>
            <div className='color12 colorClass'></div>
            <div className='color13 colorClass'></div>
            <div className='color14 colorClass'></div>

            <div className='color15 colorClass'></div>
            <div className='color16 colorClass'></div>
            <div className='color17 colorClass'></div>
            <div className='color18 colorClass'></div>
            <div className='color19 colorClass'></div>

        </ColorsContainer>
    );
}

export default Thumbnail;