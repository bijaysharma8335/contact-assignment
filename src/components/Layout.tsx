import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'



const Layout = () => {
    return (
        <div className=' '><Sidebar/>  <Outlet /></div>
    )
}

export default Layout