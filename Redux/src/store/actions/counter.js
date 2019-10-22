import * as actionTypes from './actionTypes';

// Same name as identifier above, but camel case
export const increment = () => {

    // Dispatch object
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {

    // Dispatch object
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (value) => {

    // Dispatch object
    return {
        type: actionTypes.ADD,
        val: value
    }
};

export const subtract = (value) => {

    // Dispatch object
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
};
