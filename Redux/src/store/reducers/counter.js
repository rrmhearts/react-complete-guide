import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
/*
    Our one reducer was broken into two. One for results and one for counter-related.
*/

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT: return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT: return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD      : return updateObject(state, {counter: state.counter + action.val});
        case actionTypes.SUBTRACT : return updateObject(state, {counter: state.counter - action.val});
    }
    return state;
};

export default reducer;