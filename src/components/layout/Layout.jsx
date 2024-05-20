import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Favorites from '../../pages/Favorites'
import Contacts from '../../pages/Contacts'
import Cart from '../../pages/Cart'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Profile from '../../pages/Profile'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Layout