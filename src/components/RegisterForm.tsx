import React, {FC, SyntheticEvent, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToggleOff, faToggleOn, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {useRegisterRequest} from "../request";

const RegisterForm: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginDirty, setLoginDirty] = useState<boolean>(false);
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<string>("Поле Login не может быть пустым!");
    const [passwordError, setPasswordError] = useState<string>("Поле Password не может быть пустым!");

    const [passTypeChange, setPassTypeChange] = useState<string>('password');
    const [showIconChange, setShowIconChange] = useState<IconDefinition>(faToggleOff);

    const togglePassInputType = () => {
        if (passTypeChange === "password") {
            setPassTypeChange("text")
            setShowIconChange(faToggleOn)
        } else {
            setPassTypeChange("password")
            setShowIconChange(faToggleOff)
        }
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case "login":
                setLoginDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
        }
    }

    const requiredHandler = (e: any) => {
        if (e.target.value.length > 0) {
            e.target.name === "login" ? setLoginError('') : setPasswordError('');
        } else {
            e.target.name === "login" ? setLoginError('Поле Login не может быть пустым!') : setPasswordError('Поле Password не может быть пустым!');
        }
    }

    const {mutate} = useRegisterRequest(login, password);

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        mutate();
    }

    return (
        <>
            <form className="w-full max-w-sm" onSubmit={submitHandler}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Login
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setLogin(e.target.value);
                                requiredHandler(e)
                            }}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
                            value={login}
                            name="login"
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value);
                                requiredHandler(e)
                            }}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
                            value={password}
                            name="password"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password" type={passTypeChange} placeholder="Ваш пароль"/>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3 flex justify-between">
                        <button
                            disabled={login.length === 0 || password.length === 0}
                            className="shadow disabled:bg-gray-500 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit">
                            Sign Up
                        </button>
                        <button
                            onClick={() => togglePassInputType()}
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button">
                            <FontAwesomeIcon icon={showIconChange}/>
                        </button>
                    </div>
                </div>
            </form>
            {(loginDirty && loginError) && <div
                className="p-4 mt-4 ms-auto me-auto text-sm text-red-400 rounded-lg border-double border-4 border-red-500 w-2/3">{loginError}</div>}
            {(passwordDirty && passwordError) && <div
                className="p-4 mt-4 ms-auto me-auto text-sm text-red-400 rounded-lg border-double border-4 border-red-500 w-2/3">{passwordError}</div>}
        </>
    );
};

export default RegisterForm;