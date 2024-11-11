import React from 'react'
import { useAuth } from '../context/authContext'
import { Outlet } from 'react-router-dom'

const EmployeeDashboard = () => {
    const{user} =useAuth()
  return (
    <div>EmployeeDashboard {user?.name}
        <Outlet />
    </div>

  )
}

export default EmployeeDashboard