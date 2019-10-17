import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

/*
    Our one reducer was broken into two. One for results and one for counter-related.
*/

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray});
}
/*
    Pure sync code only!
    Reducers update the state, therefore any changes to that state should be here.

    Want a LEAN reducer. This is overkill for a "small project" but in large project, we want a lean reducer.
*/
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT : return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})}) 
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    }
    return state;
};

export default reducer;