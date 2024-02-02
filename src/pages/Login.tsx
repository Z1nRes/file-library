import React, {useContext} from 'react';
import LoginForm from "../components/LoginForm";
import {Context} from "../index";
import { Navigate } from "react-router"
import {observer} from "mobx-react-lite";

const Login = () => {
    const {store} = useContext(Context);

    if (store.isAuth) {
        return <Navigate to="/"/>
    }

    return (
        <>
            <div className="px-8 py-4 flex justify-center mt-56">
                <div className="w-1/4">
                    <h2 className="text-4xl text-center mb-4">Login</h2>
                    <LoginForm/>
                </div>
            </div>
        </>
    );
};

export default observer(Login);