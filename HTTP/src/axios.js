import axios from 'axios';

/*
 Allows you to the module base URL to use.
*/

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
/*
// Base URL for all paths.
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//Axios.defaults.headers.post['Content-Type'] = 'application/json';
// Interceptor
instance.interceptors.request.use(request => {
    console.log('INTERCEPT:', request);
    // Intercept and edit request config.

    return request;
}, error => {
    // Request SENDING fails
    console.log('INTERCEPT:', error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log('INTERCEPT:', response);
    // Intercept and edit request config.

    return response;
}, error => {
    // Request SENDING fails
    console.log('INTERCEPT:', error);
    return Promise.reject(error);
});
*/

export default instance;
