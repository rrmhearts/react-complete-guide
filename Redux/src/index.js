import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux allows multiple reducers logically in code. Combines multiple files into the "one" reducer.
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

/*
    All these functions get called by Redux libraries after applied to our store.
*/
const logger = store => {
    return next /*parameter contains Function that calls reducer*/ => {

        // Receives action, executed for you
        return action => {
            // Play with action before sending to reducer.
            console.log('[Middleware] Dispatching', action);

            // Pass action ON to the reducer.
            const result = next(action); // continue to reducer

            // State AFTER reducer is called.
            console.log('[Middleware] next state', store.getState());

            return result;
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger/*, ...*/) /*enhancer*/);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
