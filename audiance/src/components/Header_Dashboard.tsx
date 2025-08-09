import React from 'react'

 export default function Header_Dashboard() {
  return (
    <div className='z-50 w-full px-10 flex justify-between border-b-1 border-black items-center max-w-[100%] text-white h-24'>
        <h1 className='text-4xl font-bold text-black'>Audiance.Ai</h1>
        <ul className='flex flex-row gap-6 justify-center items-center text-xl text-[#000000] font-urbanist '>
          <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">PN</span>
          </div>
        </ul>
    </div>
  )
}

