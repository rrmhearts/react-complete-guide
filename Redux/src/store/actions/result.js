import * as actionTypes from './actionTypes';


export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}
export const storeResult = (result) => {
    
    // Only possibly by redux-thunk
    return dispatch => {
        setTimeout(() => {
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