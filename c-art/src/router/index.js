import Dashboard from "../pages/Dashboard/Dashboard";
import Layout from "../pages/Layout";
import LoginForm from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { createBrowserRouter,redirect} from "react-router-dom";
import ForumChat from "../pages/GroupChat/groupchat";
import ArtForm from "../components/ArtForm/artForm";
import ThreeDViewer from "../pages/3DViewer/3DViewer";
import Groups from "../pages/Groups/Groups";
import DetailPage from "../pages/DetailPage/detailPage"
import ProfilePage from "../pages/ProfilePage/profilePage";
import OrderPage from "../pages/OrderPage/Order";

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
        element: <Groups />,
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
  },
]);

export default router;
