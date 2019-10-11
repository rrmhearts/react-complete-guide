export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


/*

    For larger applications, these prevent spelling mistakes of the strings. They must match.
    Prevents RUNTIME errors. Instead, there will be a compile error and can be fixed easy.

*/

// Same name as identifier above, but camel case
export const increment = () => {

    // Dispatch object
    return {
        type: INCREMENT
    }
};

export const decrement = () => {

    // Dispatch object
    return {
        type: DECREMENT
    }
};

export const add = (value) => {

    // Dispatch object
    return {
        type: ADD,
        val: value
    }
};

export const subtract = (value) => {

    // Dispatch object
    return {
        type: SUBTRACT,
        val: value
    }
};

export const storeResult = (result) => {

    // Dispatch object
    return {
        type: STORE_RESULT,
        result: result
    }
};

export const deleteResult = (id) => {

    // Dispatch object
    return {
        type: DELETE_RESULT,
        resultElId: id
    }
};