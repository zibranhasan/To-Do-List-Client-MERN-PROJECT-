import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import Update from "../components/Update/Update";
import CreateTask from "../components/CreateTask/CreateTask";
import Tasks from "../components/Tasks/Tasks";
import DataFetchCom from "../components/Completed/DataFetchCom";
import Active from "../components/Active/Active";
import ActiveData from "../components/Active/ActiveData";
import SearchResult from "../Pages/SearchBar/SearchResult";







export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Signup></Signup>
    },
    {
        path:'/signup',
        element: <Signup></Signup>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'/task/:id',
        loader:({params}) => fetch(`${process.env.REACT_APP_API_URL}/tasks/${params?.id}`) ,
        element:<TaskDetails></TaskDetails>,
    },
    {
        path:'/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`${process.env.REACT_APP_API_URL}/update/${params?.id}`)
    
    },
    {
        path:'/createtask',
        element: <CreateTask></CreateTask>
    },
    {
        path: '/all',
        element:<Tasks></Tasks>
    },
    {
        path: '/complete',
        element: <DataFetchCom></DataFetchCom>
    },
   { path: '/active',
    element: <ActiveData></ActiveData>
   },
   {
    path: '/search-result',
    element: <SearchResult></SearchResult>
   }
])