import React from 'react'

 export default function Header_Dashboard() {
  return (
    <div className='z-50 w-full px-10 flex justify-between items-center max-w-[100%] text-white h-24'>
        <h1 className='text-4xl font-bold text-[#00df9a]'>Audiance.Ai</h1>
        <ul className='flex flex-row text-2xl text-[#00df9a] font-urbanist font-semibold '>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Home</li>
        </ul>
    </div>
  )
}

