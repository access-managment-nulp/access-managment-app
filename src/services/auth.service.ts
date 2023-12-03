import axiosAuth from "./axiousConfig";
import {AuthUser} from "../models/speciality.model";


export async function login(email: string, password: string) {
    return await axiosAuth.post<AuthUser>('/Auth/login', {email: email, password: password});
}