import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'



const Layout = () => {
    return (
        <div className='h-full w-full flex'><Sidebar/>  <Outlet /></div>
    )
}

export default Layout