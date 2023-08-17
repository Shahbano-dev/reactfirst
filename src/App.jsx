import React from 'react'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage';
import { Route, Routes } from 'react-router-dom';

 
 
 
 export default function App() {
   return (
    <>
           <Routes>

<Route path="/" element={<Home />} />
<Route path="/SignUp" element={<SignUp />} />
<Route path="/Login" element={<Login/>} />
<Route path="/products/category/:categoryName" element={<CategoryPage />} />
<Route path="/products/:productID" element={<ProductPage />} />

 
</Routes>

      
             
     </>
   )
 }
 