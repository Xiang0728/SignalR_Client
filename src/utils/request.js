import axios from 'axios';
import store from '../store'

axios.interceptors.request.use(
    config => {
       
        config.headers.Authorization = `Bearer ${store.state.APItoken}`;
        
        return config;
    },
    err => {
        return Promise.reject(err);
    });

//export const apiUserToken = () => axios.get('/Google/Test');
export const apiGetUsers = () => axios.get('/Google/GetUsers');

export const apiGetPrice = (data) => axios.post('/Robot/GetPrice',data);
