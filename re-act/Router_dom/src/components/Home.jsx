import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/Navbar">Navbar</Link> <br />
      <Link to="/Footer">Footer</Link> <br />
      <Link to="/Sidebar">Sidebar</Link>
    </div>
  )
}

export default Home
