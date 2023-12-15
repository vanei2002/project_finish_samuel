import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import Home from "../pages/Home/home";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },

    {
        path: '/register',
        element: <Register/>,
    },

    {
        path: '/home',
        element: <Home/>,
    },
]);

