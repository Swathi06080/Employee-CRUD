import React from 'react'
import { useAuth } from '../context/authContext.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar.jsx'
import Navbar from '../components/Dashboard/Navbar.jsx'

const AdminDashboard = () => {
  // const {user}= useAuth()
  // const navigate =useNavigate()

  
  return (
    <div className='flex'>
    
      <div className='flex-1 m1-64 bg-gray-100 h-screen'>
      {/* <Sidebar/> */}
       <Navbar/>
       <Outlet/>
    </div>
    </div>
  )
}

export default AdminDashboard