import React from 'react'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import AddPRoduct from '../pages/AddPRoduct'
import Singlepage from '../pages/Singlepage'
import { Route, Routes } from 'react-router-dom'


const Allrouter = () => {
    return (
        <>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Product' element={<Product/>} />
            <Route path='/addproduct' element={<AddPRoduct/>}/>
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/product/:id' element={<Singlepage/>}/>
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
            

                
            </Routes>
        </>
    )
}

export default Allrouter