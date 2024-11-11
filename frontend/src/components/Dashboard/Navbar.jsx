import React from 'react'
import { useAuth } from '../../context/authContext'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const {user} =useAuth()
  return (
    <div className='flex items-center text-white justify-between h-12 bg-teal-600 px-5'>
    <p>Welcome{user.name} </p>   
    <div className="flex gap-x-4">
            <NavLink to ='/admin-dashboard' className={({isActive}) =>`${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to ='/admin-dashboard/employee' className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                <span>Employee</span>
            </NavLink>
        </div>

    <button className='px-4 py-1 bg-teal-700'>Logout</button>

    </div>
  )
}

export default Navbar