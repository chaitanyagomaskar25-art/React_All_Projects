import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router'
import RightSideBar from '../components/layout/RightSideBar'
import Footer from '../components/layout/Footer'
import Sidebar from '../components/layout/Sidebar'

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <Outlet />
        <RightSideBar />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
