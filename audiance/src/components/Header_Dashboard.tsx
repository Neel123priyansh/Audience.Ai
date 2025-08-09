import React from 'react'

 export default function Header_Dashboard() {
  return (
    <div className='z-50 w-full px-10 flex justify-between border-b-1 border-black items-center max-w-[100%] text-white h-24'>
        <h1 className='text-4xl font-bold text-black'>Audiance.Ai</h1>
        <ul className='flex flex-row text-xs text-[#000000] font-urbanist '>
          <li className='p-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" /></svg>
          </li>
          <li className='p-4 border-1 rounded-full'>XX</li>
        </ul>
    </div>
  )
}

