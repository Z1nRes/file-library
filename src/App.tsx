import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
