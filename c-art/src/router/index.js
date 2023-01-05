import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Layout from "../Pages/Layout";
import LoginForm from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ArtForm from "../components/ArtForm/artForm";
import ThreeDViewer from "../Pages/3DViewer/3DViewer";
import Groups from "../Pages/Groups/Groups";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/add-art",
        element: <ArtForm />,
      },
      {
        path: "/art/:id",
        element: <h1>Ini dari halaman edit</h1>,
      },
      {
        ///////// IF THE PATH IS UGLY/BAD THIS IS JUST A TEMPORARY
        path: "/art/:id/3d",
        element: <ThreeDViewer />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
