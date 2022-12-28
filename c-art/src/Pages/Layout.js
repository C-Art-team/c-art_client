import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import Sidebar from "../components/SideBar/Sidebar";

function Layout() {
  return (
    <div data-theme="dark">
      <MainNavbar />
      <div className="flex min-h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
