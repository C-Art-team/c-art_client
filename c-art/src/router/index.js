import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        element: <h1>dari  router</h1>,
        children: [
            {
                path: '/home',
                element: <h1>dari dashboard</h1>
            }
        ]
    }
])

export default router