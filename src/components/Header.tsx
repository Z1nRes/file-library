import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Header = () => {
    const {store} = useContext(Context);
    return (
        <header className="bg-slate-800 px-8 py-4">
            <>
                <nav className="flex justify-between">
                    <div>
                        <Link to="/">
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">MainPage
                            </button>
                        </Link>
                    </div>
                    <div>
                        { !store.isAuth ?
                            <div>
                                <Link to="/login">
                                    <button
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign
                                        up
                                    </button>
                                </Link>
                            </div>
                            :
                            <div>
                                <button
                                    onClick={() => store.logout()}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout
                                </button>
                            </div>
                        }
                    </div>
                </nav>
            </>
        </header>
    );
};

export default observer(Header);