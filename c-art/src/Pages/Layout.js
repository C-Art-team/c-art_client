import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar/MainNavbar'
import Sidebar from '../components/SideBar/Sidebar'

function Layout() {
    return (
        <>
            <MainNavbar />
            <div className='flex '>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout