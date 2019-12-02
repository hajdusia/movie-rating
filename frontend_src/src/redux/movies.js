import * as ActionTypes from './ActionTypes';

export const Movies = (state = {errMess: null, items: []}, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_MOVIES:
            return {...state, items: action.payload };

        case ActionTypes.LOAD_MOVIES_FAILED:
            return {...state, errMess: action.payload };

        default:
            return state;
    }
};