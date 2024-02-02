import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
