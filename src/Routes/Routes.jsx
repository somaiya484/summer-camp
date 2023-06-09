import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage/InstructorsPage";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/instructor',
          element:<InstructorsPage></InstructorsPage>
        },
        {
          path:'login',
          element:<Login></Login>

        }
      ]
    },
  ]);