import React, {useContext} from 'react';
import RegisterForm from "../components/RegisterForm";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Navigate} from "react-router";

const Register = () => {
    const {store} = useContext(Context);

    if (store.isAuth) {
        return <Navigate to="/"/>
    }

    return (
        <>
            <div className="px-8 py-4 flex justify-center mt-56">
                <div className="w-1/4">
                    <h2 className="text-4xl text-center mb-4">Register</h2>
                    <RegisterForm/>
                </div>
            </div>
        </>
    );
};

export default observer(Register);