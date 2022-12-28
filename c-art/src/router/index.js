import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Layout from "../Pages/Layout"
import LoginForm from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import ArtForm from "../components/ArtForm/artForm"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: "/add-art",
                element: <ArtForm />
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