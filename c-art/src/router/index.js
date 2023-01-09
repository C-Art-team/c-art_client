import Dashboard from "../Pages/Dashboard/Dashboard";
import Layout from "../Pages/Layout";
import LoginForm from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import { createBrowserRouter} from "react-router-dom";
import ForumChat from "../Pages/GroupChat/groupchat";
import ArtForm from "../components/ArtForm/artForm";
import ThreeDViewer from "../Pages/3DViewer/3DViewer";
import Groups from "../Pages/Groups/Groups";
import DetailPage from "../Pages/DetailPage/detailPage"
import ProfilePage from "../Pages/ProfilePage/profilePage";
import OrderPage from "../Pages/OrderPage/Order";

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
        element: <DetailPage />,
      },
      {
        ///////// IF THE PATH IS UGLY/BAD THIS IS JUST A TEMPORARY
        path: "/art/:id/3d",
        element: <ThreeDViewer />,
      },
      {
        path: "/groups",
        element: <Groups />,
        children : [
          {
            path : ':tag',
            element : <ForumChat/>
          }
        ]
      },
      {
        path: "/profile",
        element: <ProfilePage/>
      },
      {
        path: '/orders',
        element: <OrderPage />
      }
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
