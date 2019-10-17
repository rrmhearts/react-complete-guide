import * as actionTypes from './actionTypes';

/*
    Shouldn't prepare the state update too much. Gets the data for the reducer.
*/

export const saveResult = (result) => {
    // Change data here or in REDUCER? Update in reducer.
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

// send http request to get data for STORE.
export const storeResult = (result) => {
    
    // Only possibly by redux-thunk. Passes 2nd arg as state.
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter)
            dispatch(saveResult(result));
        }, 2000);
    }

    // Dispatch object
};

export const deleteResult = (id) => {

    // Dispatch object
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};