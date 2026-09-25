import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading.......</h1>}>
      <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
