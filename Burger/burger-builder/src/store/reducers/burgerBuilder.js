import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

/*
    Reducer called by action/burgerBuilder
*/

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

/*
    Interact with ingredient state. Change and save state based on these actions.
*/
const addIngredient = (state, action) => {
    let updatedIngredient, updatedIngredients, updatedState;
    updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    }
    updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    let updatedIngredient, updatedIngredients, updatedState;
    updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    }
    updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
}

const setIngredients = (state, action) => {
    // Reducer updates state here.
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4, /* initial price.*/
        error: false,
        building: false /* called on INITIALize ingredients.*/
    });
}

// See what states are handled in reducer...
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT   : return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS  : return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });
        default:
            return state;
    }
};

export default reducer;