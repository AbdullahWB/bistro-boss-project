import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import DashBoard from "../../Layout/DashBoard";
import MyCart from "../../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../../Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "../Admin/AdminRoute";
import ManageItems from "../../Pages/ManageItems/ManageItems";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import UserHome from "../../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../../Pages/DashBoard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <PrivetRoute><Order></Order></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ],
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            }
        ]
    }
])

export default router;