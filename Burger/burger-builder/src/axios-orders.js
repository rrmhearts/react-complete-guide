import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-4fb86.firebaseio.com/'
});

export default instance;