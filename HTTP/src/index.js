import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

// Base URL for all paths.
Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
Axios.defaults.headers.post['Content-Type'] = 'application/json';
// Interceptor
Axios.interceptors.request.use(request => {
    console.log(request);
    // Intercept and edit request config.

    return request;
}, error => {
    // Request SENDING fails
    console.log(error);
    return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
    console.log(response);
    // Intercept and edit request config.

    return response;
}, error => {
    // Request SENDING fails
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
