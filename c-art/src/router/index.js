import Dashboard from "../Pages/Dashboard/Dashboard";
import Layout from "../Pages/Layout";
import LoginForm from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import { createBrowserRouter, redirect } from "react-router-dom";
import ForumChat from "../Pages/GroupChat/groupchat";
import ArtForm from "../components/ArtForm/artForm";
import ThreeDViewer from "../Pages/3DViewer/3DViewer";
import DetailPage from "../Pages/DetailPage/detailPage";
import ProfilePage from "../Pages/ProfilePage/profilePage";
import LayoutChat from "../Pages/LayoutChat/LayoutChat"
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
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          } else {
            return null;
          }
        },
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
        element: <LayoutChat />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          } else {
            return null;
          }
        },
        children: [
          {
            path: ":tag",
            element: <ForumChat />,
          },
        ],
      },
      {
        path: "/profile",
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <ProfilePage />,
      },
      {
        path: "/cart",
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <OrderPage />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      } else {
        return null;
      }
    },
    element: <LoginForm />,
  },
  {
    path: "/register",
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      } else {
        return null;
      }
    },
    element: <Register />,
    children: [
      {
        path: "verify/:token",
        element: <Register />,
      },
    ],
  },
]);

export default router;
