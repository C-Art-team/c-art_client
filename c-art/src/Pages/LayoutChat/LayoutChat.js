import React from 'react'
import { Outlet } from 'react-router-dom'
import Groups from '../Groups/Groups'

function LayoutChat() {
    return (
        <div className='flex'>
            <Groups />
            <Outlet />
        </div>
    )
}

export default LayoutChat