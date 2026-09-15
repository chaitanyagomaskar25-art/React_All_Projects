import React from 'react'
import Navbar from './component/Navbar'
import Cart from './component/Cart'
import ProductList from './component/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<ProductList />}/>
  <Route path='cart' element={<Cart />}/>
</Routes>
</BrowserRouter>
  )
}

export default App
