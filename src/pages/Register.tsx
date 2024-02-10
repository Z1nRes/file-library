import React from 'react';
import RegisterForm from "../components/RegisterForm";

const Register = () => {
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

export default Register;