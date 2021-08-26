// node_modules imports
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// my imports
import PalleteContainer from '../../containers/PalleteContainer/PalleteContainer'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

function PalleteItem({colorObject}) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
<div  key={colorObject.id} className="palleteWrapper">
            
    <Button
        variant="contained"
        color="secondary"
        className="delete-button"
        onClick={handleClickOpen}>
            <DeleteIcon />
            
        </Button>

        <ConfirmDialog open={open} handleClose={handleClose} id={colorObject.id} />

    <Link to={`/pallete/${colorObject.id}`} style={{textDecoration: 'none'}}>
        <PalleteContainer colors={colorObject.colors} palleteName={colorObject.palleteName} symbol={colorObject.emoji} />
    </Link>
            </div>)

}

export default PalleteItem;