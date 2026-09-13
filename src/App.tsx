// import { useState } from 'react'
// import logo from './assets/logo-text.png'
import Nav from './components/Nav'
import Home from './components/home'
import Tecno from './components/Tecno'
import { Suspense } from "react";
import type { Technology } from './type/tecnoType';
import './App.css'
import Footer from './components/Footer';
const comPromise = async():Promise<Technology[]>=>{
  const res = await fetch('./data.json');
  const data= await res.json();
  return data;
}

function App() {
  

  return (
    <>
            <Nav></Nav> 
            <Home></Home>
            <Suspense fallback={<h1>Data Loading....</h1>}>
            <Tecno comPromise={comPromise()}></Tecno>
            </Suspense>
            <Footer></Footer>
           
    </>
  )
}

export default App
