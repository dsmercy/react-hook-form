import axios from "axios";

axios.defaults.baseURL = 'https://localhost:7069/api/';
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data.data;



const requests = {
    get: (url, params) => axios.get(url, { params }).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
}

const Account = {
    login: (values) => requests.post('account/login', values),
    register: (values) => requests.post('account/register', values)
}


const services = {
    Account
}


export default services;