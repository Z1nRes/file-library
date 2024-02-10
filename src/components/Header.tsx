import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-slate-800 px-8 py-4">
            <>
                <nav className="flex justify-between">
                    <div>
                        <Link to="/">
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Главная страница
                            </button>
                        </Link>
                    </div>
                    <div>
                        { !localStorage.getItem('token') ?
                            <div>
                                <Link to="/login">
                                    <button
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Вход
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Регистрация
                                    </button>
                                </Link>
                            </div>
                            :
                            <div>
                                <button
                                    onClick={() => {
                                            localStorage.removeItem('token');
                                            window.location.reload();
                                        }
                                    }
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Выход
                                </button>
                            </div>
                        }
                    </div>
                </nav>
            </>
        </header>
    );
};

export default Header;