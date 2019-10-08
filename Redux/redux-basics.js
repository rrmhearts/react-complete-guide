
// Node JS syntax
const redux = require('redux');
const createStore = redux.createStore; // function

const initialState = {
    counter: 0
}

/* 
    Reducer, gets state and action, return updated state.
        Receive action and update
        State (pure, sync functions,
        no side-effects!)
        Can be multiple, combined reducers

        Updates Central Store
*/
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        // Never mutate any data! Strong warning emphasized.
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

/* Stores Application state */
const store = createStore(rootReducer);
console.log('[Create store]', store.getState());

/*
    Subscription
        Passes updated state to application
        State changes call this function.
*/
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

/*
    Dispatching Action
        Pre-defined "information package"
        (possibly Reaches with payload) to reducer

        Always takes a JS object with type property.
        It's "action type"
*/
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log('[Dispatched]', store.getState());
