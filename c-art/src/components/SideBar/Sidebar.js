import React from "react";
import { useSelector } from "react-redux";
import logo from "./C-art-logo.png";
import { AiFillHome } from "react-icons/ai"
import { FaLuggageCart } from "react-icons/fa"
import { MdGroups } from "react-icons/md"
import { RiLogoutBoxFill } from "react-icons/ri"
import { Link,useNavigate } from "react-router-dom";

export default function Sidebar() {
  const theme = useSelector((state) => {
    return state.themeReducer.theme
  })
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className="flex">
      <div
        data-theme={theme}
        className="flex flex-col h-screen sticky top-0 p-3 shadow w-36 justify-between drawer-conten bg-base-300"
        style={{ backgroundColor: "#121218" }}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-center">
            <img src={logo} style={{ width: 40 }} />
          </div>
          <div className="flex-1">
            <ul className="pt-16 pb-4 space-y-1 text-sm">
              <li className="rounded-sm py-3">
                <Link
                  to={"/"}
                  className="flex justify-center p-2 space-x-3 rounded-md hover:bg-green-700 w-full"
                >
                  <AiFillHome size={25} />
                </Link>
              </li>
              <li className="rounded-sm py-3">
                <button
                  
                  className="flex justify-center p-2 space-x-3 rounded-md hover:bg-green-600 w-full"
                >
                  <FaLuggageCart size={25} />
                </button>
              </li>
              <li className="rounded-sm py-3">
                <Link
                  to="/groups"
                  className="flex justify-center p-2 space-x-3 rounded-md hover:bg-green-600 w-full"
                >
                  <MdGroups size={25} />
                </Link>
              </li>
              <li className="rounded-sm"></li>
            </ul>
          </div>
        </div>
        <button onClick={handleLogout} className="flex justify-center p-2 space-x-3 rounded-md hover:bg-red-700 w-full">
          <RiLogoutBoxFill size={30} />
        </button>
      </div>
    </div>
  );
}
