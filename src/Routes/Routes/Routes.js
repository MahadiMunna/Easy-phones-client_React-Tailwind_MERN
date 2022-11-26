import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/categories',
                element:<Categories></Categories>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path:'*',
        element:<h2 className="text-red-600 text-4xl text-center font-bold mt-20" >404 page no found</h2>
    }
])

export default router;