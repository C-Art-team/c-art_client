import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dashboard/Dashboard"
import Layout from "../pages/Layout"
import LoginForm from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import ArtForm from "../components/ArtForm/artForm"
import DetailPage from "../pages/DetailPage/detailPage"

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
            },
            {
                path: "/art/:id",
                element : <DetailPage/>
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