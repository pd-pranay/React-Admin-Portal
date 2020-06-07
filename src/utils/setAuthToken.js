import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['authorization'] = token;
        localStorage.setItem('token', token);
    } else {
        delete axios.defaults.headers.common['authorization'];
        localStorage.removeItem('token');
    }
};

export default setAuthToken;