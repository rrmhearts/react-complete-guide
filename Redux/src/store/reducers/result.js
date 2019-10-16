import * as actionTypes from '../actions/actionTypes';

/*
    Our one reducer was broken into two. One for results and one for counter-related.
*/

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // Concat adds item to an array immutably. "pushes" date result object.
                // still can access result! because 1 state, 2 reducers are merged into 1 global state..
                // Can't access GLOBAL STATE. Have to access through ACTION. Pass result through dispatch.
                results: state.results.concat({id: new Date(), value: action.result}) 
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;