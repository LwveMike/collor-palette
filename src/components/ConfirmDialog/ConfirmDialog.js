// node_modules imports
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import {useSelector, useDispatch} from 'react-redux';

// my imports
import {deletePallete} from '../../features/actions';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function ConfirmDialog({open, handleClose, id}) {

    const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        style={{background: 'inherit'}}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Are you sure ?</DialogTitle>
        <DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(deletePallete(id))} color="primary" variant="contained" startIcon={<DoneIcon/>}>
                    Done
                </Button>
                <Button onClick={handleClose} color="secondary" variant="contained" startIcon={<CloseIcon/>}>
                    Close
                </Button>
            </DialogActions>

        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default ConfirmDialog;