import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar/MainNavbar'
import Sidebar from '../components/SideBar/Sidebar'

function Layout() {
    const theme = useSelector((state) => {
        return state.themeReducer.theme
    })
    return (
        <div className='flex sticky' data-theme={theme}>
            <Sidebar />
            <div className='flex-col w-full'>
                <MainNavbar />
                <Outlet />
            </div>
        </div>

    )
}

export default Layout