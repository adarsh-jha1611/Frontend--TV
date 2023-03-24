import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from '../pages/Places'
import Tourdetails from '../pages/Tourdetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'


const Routers = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route path='/home'element={<Home/>}/>
          <Route path='/places'element={<Tours/>}/>
          <Route path='/tours/:id'element={<Tourdetails/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='/thank-you'element={<ThankYou/>}/>
          <Route path='/tours/search'element={<SearchResultList/>}/>
      </Routes>
    )
}

export default Routers