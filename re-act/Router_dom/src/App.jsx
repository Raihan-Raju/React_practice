//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
