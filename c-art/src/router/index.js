import { createBrowserRouter } from "react-router-dom"
import Layout from "../Pages/Layout"
import LoginForm from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <h1>dari dashboard</h1>
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