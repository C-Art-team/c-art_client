import React from 'react'
import { Outlet } from 'react-router-dom'
import ForumChat from '../GroupChat/groupchat'
import Groups from '../Groups/Groups'

function LayoutChat() {
    return (
        <div className='flex pt-5 h-screen'>
            <div className=' w-1/3'>
                <Groups />
            </div>
            <div className=' w-2/3 h-full'>
                <ForumChat />
            </div>
        </div>
    )
}

export default LayoutChat