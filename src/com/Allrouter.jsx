import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Allrouter = () => {
    return (
        <>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Product' element={<Product/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
            

                
            </Routes>
        </>
    )
}

export default Allrouter