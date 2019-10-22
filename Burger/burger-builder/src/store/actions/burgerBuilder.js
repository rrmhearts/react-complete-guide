import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

/*
    Actions called by BurgerBuilder
*/

export const addIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

/*
    Action file. BurgerBuilder calls this function.
*/
export const initIngredients = () => {
    // Here we are using Redux Thunk! 
    return dispatch => {
        axios.get( '/ingredients.json' )
            .then( response => {
                /*
                    Normally component calls dispatch on action.
                    Here, component calls dispatch(initIngredients)
                and initIngredients returns a function that is
                intercepted by Thunk. Thunk calls the function asyncronously 
                and dispatches more action to Redux.
                */
               dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};