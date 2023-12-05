import axiosAuth from "./axiousConfig";

export class BaseRestService {

    protected get<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axiosAuth.get<TResponse>( url, {params: data});
    }
    protected post<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axiosAuth.post<TResponse>( url, data);
    }
    protected put<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axiosAuth.put<TResponse>( url, data);
    }
    protected delete<TResponse = any,TRequest = any>(url: string, data?: TRequest) {
        return axiosAuth.delete<TResponse>( url, {params: data});
    }

}