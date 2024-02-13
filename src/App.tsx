import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import AuthRequired from "./hoc/AuthRequired";

function App() {

    const queryClient: QueryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Routes>
                    <Route path="/" element={
                            <AuthRequired>
                                <MainPage />
                            </AuthRequired>
                    }/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </QueryClientProvider>
        </>
    );
}

export default App;
