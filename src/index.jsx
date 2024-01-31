import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./components/Header";
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <App/>
    </>
);
