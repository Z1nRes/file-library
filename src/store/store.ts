import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class Store{
    isAuth: boolean = false;
    error: string = '';
    constructor() {
        makeAutoObservable(this);
    }
    setAuth(bool: boolean){
        this.isAuth = bool;
    }

    async login(login: string, password: string){
        try {
            const response = await AuthService.login(login, password);
            if (response)
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
        } catch (e) {
            console.log(e);
        }
    }

    async register(login: string, password: string){
        try {
            const response = await AuthService.register(login, password);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
        } catch (e) {
            console.log(e);
        }
    }

    async logout(){
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            console.log('Ошибка при попытке выйти из аккаунта...', e);
        }
    }
}