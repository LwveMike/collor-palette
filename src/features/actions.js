// my imports
import AT from './actionTypes';

export const createPallete = (palleteName, colors) => {
    return {
        type: AT.CREATE_PALLETE,
        payload: {
            palleteName: palleteName,
            colors: colors
        }
    };
};


export const deletePallete = (id) => {
    return {
        type: AT.DELETE_PALLETE,
        payload: {
            id: id
        }
    }
}
