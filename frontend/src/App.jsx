import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Products from './pages/Products'
import MyOrder from './pages/MyOrder'
import Packages from './pages/Packages'
import DriverPackage from './pages/DriverPackage'
import Drivers from './pages/Drivers'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<MyOrder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/my-packages" element={<DriverPackage />} />
      </Routes>
  )
}

export default App