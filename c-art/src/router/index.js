import { createBrowserRouter } from "react-router-dom"
import ArtForm from "../components/ArtForm/artForm"
import DetailPage from "../pages/DetailPage/detailPage"
import Layout from "../pages/Layout"
import LoginForm from "../pages/Login/Login"
import Register from "../pages/Register/Register"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <h1>dari dashboard</h1>,
            },
            {
                path:"/add-art",
                element : <ArtForm/>
            },
            {
                path: "/art/:id",
                element: <DetailPage/>
                
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