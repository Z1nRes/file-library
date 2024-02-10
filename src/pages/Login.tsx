import React from 'react';
import LoginForm from "../components/LoginForm";

const Login = () => {
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

export default Login;