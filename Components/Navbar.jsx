import React from 'react'
import Logo from '../Images/IMDB.jpeg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex space-x-8 border items-center pl-3 py-3'>
        <img className='w-[50px]' src={Logo} alt="" />

        <Link className='text-blue-800 text-3xl' to="/">Movies</Link>
        <Link className='text-blue-800 text-3xl' to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar
