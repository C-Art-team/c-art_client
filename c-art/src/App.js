// import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Sidebar from "./components/SideBar/Sidebar";
import { RouterProvider } from "react-router-dom"
import router from "./router";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Sidebar />
        <MainNavbar />
      </div>
    </RouterProvider>
  );
}

export default App;
