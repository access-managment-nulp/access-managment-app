import axios from "axios"

export class BaseRestService {
    protected baseApiUrl: string = "https://localhost:7019/api"

    protected get<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axios.get<TResponse>(this.baseApiUrl + url, {params: data});
    }
    protected post<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axios.post<TResponse>(this.baseApiUrl + url, data);
    }
    protected put<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axios.put<TResponse>(this.baseApiUrl + url, data);
    }
    protected delete<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axios.delete<TResponse>(this.baseApiUrl + url, {params: data});
    }
    
}