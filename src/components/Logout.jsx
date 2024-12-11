import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiLogout } from 'react-icons/hi'
import { removeCookie } from 'react-use-cookie'

const Logout = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
            removeCookie('my-token');
            navigate('/');
    }

  return (
    <div><button onClick={handleLogout} className='flex items-center justify-start w-24 gap-3 mt-2 py-3 px-2 text-white bg-blue-600 rounded'>
    Logout <span>
      <HiLogout/>
    </span>
  </button></div>
  )
}

export default Logout