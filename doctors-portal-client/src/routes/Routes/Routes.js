import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appointment from "../../pages/Appointment/Appointment";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointments',
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default router;