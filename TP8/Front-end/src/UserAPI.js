import axios from 'axios'
import {toast} from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
});

const notify = () => toast("Attention erreur!");

export async function login(email, password) {
    const response = await axiosInstance.post('login', {
        email: email,
        password: password
    });
    console.log(response.data);
    return response.data;
}

axiosInstance.interceptors.response.use(function (response) {
    const token = response.data.token;
    if (token) {
      localStorage.setItem("accessToken", token);
    }
    return response;
}, function (error) {
    notify(error.message);
});

