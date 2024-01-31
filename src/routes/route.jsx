import React from 'react';
import {createBrowserRouter, Link} from "react-router-dom";

const Route = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <div>Hello world</div>
                <Link to="/work">Go to WORK</Link>
            </>
        ),
        errorElement: <h2>Ooops...</h2>
    },
    {
        path: "/work",
        element: (
            <>
                <div>Work</div>
                <Link to="/">Go to /</Link>
            </>
        ),
        errorElement: <h2>Ooops...</h2>
    }
]);

export default Route;