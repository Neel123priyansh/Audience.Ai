import React from 'react'

 export default function Header_Dashboard() {
  return (
    <div className='z-50 w-full flex justify-between items-center max-w-[100%] text-white h-24 bg-[#f7efd8]'>
        <h1 className='text-5xl font-bold text-[#00df9a]'>Pending.</h1>
        <ul className='flex flex-row text-2xl text-[#00df9a] font-urbanist font-semibold '>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Home</li>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60 '>About Us</li>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Price</li >
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Contact Us</li>
        </ul>
    </div>
  )
}

