// my imports
import initialState from '../initialState';
import AT from './actionTypes';

const fromNameToId = (palleteName) => palleteName.toLowerCase().replace(' ', '-');

const colorsPalleteReducer = (state = initialState, action) => {
    switch(action.type){

        case AT.CREATE_PALLETE : {
          let arr = [...state];
          arr.push({
                palleteName: action.payload.palleteName,
                id: fromNameToId(action.payload.palleteName),
                emoji: '',
                colors: action.payload.colors
          });

          localStorage.setItem('palletes',
            JSON.stringify(arr)
          );

          return [
            ...state,
            {
                palleteName: action.payload.palleteName,
                id: fromNameToId(action.payload.palleteName),
                emoji: '',
                colors: action.payload.colors

            }
        ];
        }

        case AT.DELETE_PALLETE : {

          let newArr = state.filter( colorPallete => {
            if(colorPallete.id !== action.payload.id){
                return colorPallete;
            }
        });

          localStorage.setItem('palletes', JSON.stringify(newArr));
          return [...newArr];
        }



        default: return state;
    }
}

export default colorsPalleteReducer;



