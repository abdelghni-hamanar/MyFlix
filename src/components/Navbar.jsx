import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between p-4 items-center z-[100] absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>MyFlix</h1>
        <div>
            <button className='text-white rounded px-6 py-2   cursor-pointer'>Sign In</button>
            <button className='border-red-500  bg-red-500 text-white rounded px-6 py-2 ml-4 cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar