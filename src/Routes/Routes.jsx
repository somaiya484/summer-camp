import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage/InstructorsPage";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ProvateRoute from "../Routes/ProvateRoute"
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoutes from "./AdminRoutes";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <InstructorsPage></InstructorsPage>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: 'dashboard',
    element:<ProvateRoute><Dashboard></Dashboard></ProvateRoute> ,  
    children: [
      {
        path: 'myClasses', 
        element: <MyClasses></MyClasses>
      },
      {
        path: 'payment', 
        element: <Payment></Payment>
      },
      {
        path: 'allUsers', 
        element: <AllUsers></AllUsers>
      },
      {
        path: 'manageClass', 
        element:<ManageClass></ManageClass>
      },
      {
        path:'addclass',
        element:<AddClass></AddClass>
      }
    ]
  },
]);