import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";

const LoginForm: FC = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);
    return (
        <>
        <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-full-name">
                        Login
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        onChange={e => setLogin(e.target.value)}
                        value={login}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name" type="text" placeholder="Ваш логин"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-password">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-password" type="password" placeholder="Ваш пароль"/>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button
                        onClick={() => store.login(login, password)}
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button">
                        Login
                    </button>
                </div>
            </div>
        </form>
        </>
    );
};

export default LoginForm;