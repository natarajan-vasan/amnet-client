import axios from 'axios';
//
const HttpService = axios.create({
    baseURL: "http://localhost:8081",
    // responseType: 'arraybuffer'
});
//
export default HttpService;