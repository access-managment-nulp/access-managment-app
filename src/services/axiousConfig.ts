import axios from "axios";
import {useNavigate} from "react-router-dom";

const baseApiUrl: string = "https://localhost:7019/api"

const instance = axios.create({
    baseURL: baseApiUrl
})

instance.interceptors.request.use(config => {
    const token = localStorage.getItem("accessManagmentAppToken");
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config
});

instance.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status === 401){
            localStorage.removeItem("accessManagmentAppToken");
            window.location.replace('/');
            return Promise.reject(error);
        }
    }
);

const axiosAuth = instance;

export default axiosAuth;