import { SET_CONTEOS } from '../constants';
import { SET_URL } from '../constants';

const initialState = { datos: [] };

export default function setBrowserInfo(state = initialState, action) {
    switch (action.type) {
        case SET_CONTEOS:
            return {
                ...state,
                datos: action.data.conteos
            };
        case SET_URL:
            return {
                ...state,
                url: 'https://csvcounts1.s3.us-west-2.amazonaws.com/conteosVehiculares.csv'
            };
        default:{
            return state;
        }
            
    }
}