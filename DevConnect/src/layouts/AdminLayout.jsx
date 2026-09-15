import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
      admin Navabr 
      admin Sidebar
      <Outlet />
    </div>
  )
}

export default AdminLayout
