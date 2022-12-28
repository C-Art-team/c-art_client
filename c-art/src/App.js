// import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Sidebar from "./components/SideBar/Sidebar";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Sidebar />
        <MainNavbar />
      </RouterProvider>
    </div>
  );
}

export default App;
