import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import ForumChat from '../GroupChat/groupchat'
import Groups from '../Groups/Groups'

function LayoutChat() {
    const { tag } = useParams();
    console.log(tag)

    return (
        <div className='flex pt-5 '>
            <div className=' w-1/3 h-screen'>
                <Groups />
            </div>
            <div className=' w-2/3 h-full'>
                <ForumChat />
            </div>
        </div>
    )
}

export default LayoutChat