import $api from "../http";
import {AxiosResponse} from 'axios';
import {IAuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('auth/login', {login, password});
    }

    static async register(login: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('auth/register', {login, password});
    }
}