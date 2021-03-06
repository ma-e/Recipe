import { FETCH_RECIPES, NEW_RECIPES } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                items: action.payload
            };
        case NEW_RECIPES:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}