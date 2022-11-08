import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  //console.log(user.email)

  const handleLogout = async() => {
     try{
        await logOut()
        navigate('/')
     }catch(error){
      console.log(error)
     }
  }

  return (
    <div className='flex w-full justify-between p-4 items-center z-[100] absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>MyFlix</h1>
      </Link>  
        {user?.email ? <div>
          <Link to='/account'>
            <button className='text-white rounded px-6 py-2   cursor-pointer'>Account</button>
          </Link>
          <button onClick={handleLogout} className='border-red-500  bg-red-500 text-white rounded px-6 py-2 ml-4 cursor-pointer'>Logout</button>
          
        </div> :
          <div>
          <Link to='/login'>
            <button className='text-white rounded px-6 py-2   cursor-pointer'>Sign In</button>
          </Link>
          <Link to='/signup'>
              <button className='border-red-500  bg-red-500 text-white rounded px-6 py-2 ml-4 cursor-pointer'>Sign Up</button>
          </Link>
        </div>}
    </div>
  )
}

export default Navbar