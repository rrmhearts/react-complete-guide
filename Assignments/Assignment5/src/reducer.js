const initialState = {
    persons: []
}

/* 
    Reducer, gets state and action, return updated state.
        Receive action and update
        State (pure, sync functions,
        no side-effects!)
        Can be multiple, combined reducers
        Updates Central Store
*/
const reducer = (state = initialState, action) => {

    let newPersons = [...state.persons];
    if (action.type === 'ADD') {
        return {
            ...state,
            persons: newPersons.concat(action.person)
        };
    }
    if (action.type === 'DELETE') {
        return {
            ...state,
            persons: newPersons.filter(person => person.id !== action.personId)
        };
    }
    return state;
};
export default reducer;