import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='w-auto border-4 border-black '>
            <ul className='p-2 mx-2 h-full'>
                <li>
                    <Link to='/' className='text-2xl text-blue-500 underline py-5 border-b-violet-950'>Contact</Link>
                </li>
                <li>
                    <Link to='/charts' className='text-2xl text-blue-500 underline my-4'>Charts and Maps</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar