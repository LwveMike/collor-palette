// node_modules imports
import React, {useState, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

// my imports
import { ColorsContext } from '../../views/NewPallete';
import { createPallete } from '../../features/actions';


const isNameAlreadyUsed = (arr, name) => arr.some( item => item.palleteName.toLowerCase() === name.toLowerCase());


function DialogAlert({setIsAlertOpened, isAlertOpened}) {

    const [errorText, setErrorText] = useState('');
    const [palleteName, setPalleteName] = useState('');
    const {colors} = useContext(ColorsContext); 
    const colorsPallete = useSelector(state => state);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClose = () => setIsAlertOpened(false);
    const handleSubmit = () => {
        if(palleteName === '')
            setErrorText('This field is required');
        if(isNameAlreadyUsed(colorsPallete, palleteName))
            setErrorText('Palletes\' name must be unique');
        else {
            setErrorText('');
            history.push('/');
            return dispatch(createPallete(palleteName, colors));
        }
    }
    

  return (
    <div>

      <Dialog
        open={isAlertOpened}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Save Pallete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Choose a unique name for your beautiful pallette and save it for future use.
          </DialogContentText>

           <TextField style={{marginTop: '8px', width: '85%', marginBottom: '8px'}}
          id="filled-helperText"
          value={palleteName}
          onChange={(e) => setPalleteName(e.target.value)}
          label="Enter your Pallete Name"
          helperText={errorText}
          error={errorText === '' ? false : true}
        />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit}
          variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogAlert;