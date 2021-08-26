// node_modules imports
import React, {useState} from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import copy from 'copy-to-clipboard';

// my imports
import {getColorByBgColor} from '../../components/ColorPresented/ColorPresented';

    const getInset = (el, setPos) => {
        let top = el.parentElement.offsetTop;
        let left = el.parentElement.offsetLeft;
        let right = Math.floor(document.documentElement.offsetWidth - left - el.scrollWidth);
        let bottom = Math.floor(document.documentElement.offsetHeight - top - el.scrollHeight);
        let widthF = el.scrollWidth - 1;
        let heightF = el.scrollHeight - 1;
        let lastHeightF = ((document.documentElement.offsetHeight - 31 - 48) / document.documentElement.offsetHeight) * 100;
        return setPos({top, right, bottom, left, widthF, heightF, lastHeightF});
  
    }

    const handleClick = (e, setPos, getInset, appear, setAppear, setIsDisabled, copy, format, theValue) => {
          setIsDisabled(true);
          getInset(e.target, setPos);
          setAppear(!appear);
          setTimeout(() => {
            setAppear(false);
            setIsDisabled(false);
        }, 2000);

        if(format === 'HEX')
          copy((theValue).toUpperCase());
        else if (format === 'RGB')
          copy(`RGB(${chroma(theValue).rgb()[0]}, ${chroma(theValue).rgb()[1]}, ${chroma(theValue).rgb()[2]})`);
        else
          copy(`RGBA(${chroma(theValue).rgba()[0]}, ${chroma(theValue).rgba()[1]}, ${chroma(theValue).rgba()[2]}, ${chroma(theValue).rgba()[3]})`);
         
      }


      const Container = styled.div`

        @keyframes grow {
            from {
                top: ${props => props.pos.top}px;
                right: ${props => props.pos.right}px;
                bottom: ${props => props.pos.bottom}px;
                left: ${props => props.pos.left}px;
                display: none;
                width:  ${props => props.pos.widthF}px; 
                height: ${props => props.pos.heightF}px;
                
                
            }
            to {
                inset: 48px 0 32px 0;
                display: block;
                width: 100%;
                height: ${props => props.pos.lastHeightF}%;
                
            }
        }


        position: fixed;
        z-index: 100;
        cursor: pointer;
        background-color: ${props => props.bgC};

        animation: grow 200ms ease-in-out;
        animation-fill-mode: forwards;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

`;

const Ribbon = styled.div`
        width: 100%;
        height: 30%; 
        background-color: rgba(255, 255, 255, 0.3);
        color: ${props => getColorByBgColor(props.bgC, props.level)};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 40px;

        display: grid;
        place-items: center center;

`;

const CopiedColor = styled.div`
        color: ${props => getColorByBgColor(props.bgC, props.level)};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
`;

function ColorCopy({pos, setPos, bgC, level, theValue, format}) {


    const [appear, setAppear] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    return  (
      <button style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}} disabled={isDisabled} onClick={(e) => handleClick(e, setPos, getInset, appear, setAppear, setIsDisabled, copy, format, theValue) } >
          
        {
            appear === true ? <Container pos={pos} bgC={bgC} >
                <Ribbon bgC={bgC} level={level}>
                    <p>COPIED!</p>
                </Ribbon>
                <CopiedColor bgC={bgC} level={level}>
                    {
                      format === 'HEX' ? <p>{(theValue).toUpperCase()}</p> : format === 'RGB' ? <p>{`RGB(${chroma(theValue).rgb()[0]}, ${chroma(theValue).rgb()[1]}, ${chroma(theValue).rgb()[2]})`}</p> : <p>{`RGBA(${chroma(theValue).rgba()[0]}, ${chroma(theValue).rgba()[1]}, ${chroma(theValue).rgba()[2]}, ${chroma(theValue).rgba()[3]})`}</p>
                    
                      
                    }
                </CopiedColor>


            </Container> : null
        }

      </button>
    );
    
}

export default ColorCopy;