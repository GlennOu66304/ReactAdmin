import axios from 'axios';
import { getToken, getUsername } from './cookie.js'
import { message } from 'antd';
const service = axios.create({
    // baseURL: process.env.REACT_APP_API,
    baseURL: process.env.REACT_APP_API,
    timeout: 5000,
});

// Add a request interceptor
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers["Token"] = getToken();
    config.headers["Username"] = getUsername();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const data = response.data;
    if (data.resCode !== 0) {
        message.info(data.message);
        if (data.resCode === 1023) {
            alert(111)
        }
        return Promise.reject(data);

    } else {
        return response

    }

}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const data = error.request
    return Promise.reject(data);
});

export default service;