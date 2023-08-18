import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'



const Layout = () => {
    return (
        <div className='  flex h-[400px]'><Sidebar/>  <Outlet /></div>
    )
}

export default Layout