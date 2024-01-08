import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import AddPRoduct from '../pages/AddPRoduct'


const Allrouter = () => {
    return (
        <>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Product' element={<Product/>} />
            <Route path='/addproduct' element={<AddPRoduct/>}/>
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
            

                
            </Routes>
        </>
    )
}

export default Allrouter