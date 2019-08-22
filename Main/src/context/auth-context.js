import React from 'react';

// pass between components without props.
const authContext = React.createContext({
    authenticated: false, 
    login: () => {} // better autocompletion?
});

export default authContext;