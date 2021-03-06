// node_modules imports
import React, {useState, useContext, useEffect, useRef} from 'react';
import { ChromePicker} from 'react-color';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

// my imports
import Button from '../Button/Button';
import { ColorsContext } from '../../views/NewPallete';
import { getColorByBgColor} from '../ColorPresented/ColorPresented'

const AddColorButton = styled(Button)`
    width: 85%;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-top: 6px;
    box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.3);
    color: ${props => getColorByBgColor(props.bgC)};

    opacity: ${props => props.disabled === true ? '0.5' : '1'};
    cursor: ${props => props.disabled === true ? 'default' : 'pointer'};

    
`;


const ColorPartContainer = styled.div`
    margin: 20px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const isNameAlreadyUsed = (arr, name) => arr.some( item => item.name.toLowerCase() === name.toLowerCase());
const isColorAlreadyUsed = (arr, colorValue) => arr.some( item => item.colorValue === colorValue );



function ColorPicker({genRef, buttonsBlocked, setButtonsBlocked}) {

    const addRef = useRef();

    const [color, setColor] = useState({hex: '#7f3f3f'});
    const [colorName, setColorName] = useState('');
    const [errorText, setErrorText] = useState('');


    const {colors, setColors} = useContext(ColorsContext);


    const addColor = () => { 
        if(colorName === '')
            return setErrorText('Please enter a color name');
        if(isNameAlreadyUsed(colors, colorName))
            return setErrorText('Please enter a unique name');
        if(isColorAlreadyUsed(colors, color.hex))
            return setErrorText('Please enter a unique color');
        if(colors.length > 20)
            return setErrorText('You can have only 20 colors in a pallete');


        setErrorText('');
        setButtonsBlocked(false);
        setColorName('');
        return setColors([...colors, {name: colorName, colorValue: color.hex}]);
    }


    useEffect(() => {
        if(colors.length >= 20)
            setButtonsBlocked(true);
        else 
            setButtonsBlocked(false);

    }, [colors.length])

    const changeValidator = (event) => {
        setColorName(event.target.value);
        if(event.target.value === '')
            return setErrorText('Please enter a color name');
        if(isNameAlreadyUsed(colors, event.target.value))
            return setErrorText('Please enter a unique name');
        else {
            return setErrorText('');
            }
    }

    const colorPickerChangeHandler = (updatedColor) => {
            if(isColorAlreadyUsed(colors, updatedColor))
                return setErrorText('Please enter a unique color');
            setErrorText('');
            return setColor(updatedColor);

    }



    return(
        <ColorPartContainer>
        <ChromePicker width='80%' color={color} onChangeComplete={(updatedColor) => {
            colorPickerChangeHandler(updatedColor);
            }}/>

        <TextField style={{marginTop: '8px', width: '85%', marginBottom: '8px'}}
          id="filled-helperText"
          value={colorName}
          onChange={(event) => changeValidator(event)}
          label="Color Name"
          helperText={errorText}
          error={errorText === '' ? false : true}
        />

        <AddColorButton fF='Roboto' fZ='16px' bgC={color.hex} bR='5px' onClick={addColor} ref={addRef}  disabled={buttonsBlocked}>ADD COLOR</AddColorButton>

                </ColorPartContainer>
    );
}

export default ColorPicker;