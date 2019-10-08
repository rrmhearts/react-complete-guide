const initialState = {
    counter: 0,
    results: [] // for button saving values...
}

const reducer = (state = initialState, action) => {

    // Switch reducer.
    switch (action.type ) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                counter: state.counter + action.value
            }
    }

    return state;
};

export default reducer;