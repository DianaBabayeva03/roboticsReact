import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Basket from '../pages/basket/Basket'
import Dashboard from '../pages/dashboard/Dashboard'
import Home from '../pages/home/Home'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router