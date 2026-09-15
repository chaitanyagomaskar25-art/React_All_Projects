import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element ={ <Home /> }/>
        <Route path='/about' element = { <About /> } />
        <Route path='/product' element={ <Product /> }/>


        <Route path='*' element={ <NotFound /> }/>

      </Routes>

      <Footer />
    </div>
  )
}

export default App




// routing
// react rounting library
// BrowserRouter => used mostly
// HashRouter => github Pages
// MemoryRouter => stores all entries in memory
// StaticRouter => used to geenrate staic sites
// using routes and route 
// how to stop reloading in SPA => Link 
// basic setup of routes
// Not FOund page (404 pages) using (*)
// Outlet in react 
// nested routes and ways of using it
// useParams Hook 
// useNavigate Hook state
// NavLink



// topic to learn 
// dyanmic route
// 