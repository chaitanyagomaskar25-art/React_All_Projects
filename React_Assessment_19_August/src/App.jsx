import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading.....!!!!!!!!!</h1>}>
      <Outlet />

      </Suspense>
    </>
  )
}

export default App
