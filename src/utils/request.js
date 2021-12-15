import axios from 'axios';

const service = axios.create({
    // baseURL: process.env.REACT_APP_API,
    baseURL: process.env.REACT_APP_API,
    timeout: 5000,
});

// Add a request interceptor
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(process.env.NODE_ENV);
    console.log(process.env.REACT_APP_API);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default service;