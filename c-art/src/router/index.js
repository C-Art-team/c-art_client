import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Layout from "../Pages/Layout"
import LoginForm from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginForm />
    },
    {
        path: '/register',
        element: <Register />
    }

])

export default router