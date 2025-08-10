import React from 'react'

export default function Side_pannel() {
  return (
    <div className='fixed w-60 h-full flex flex-col border-b-1 border-r-1 border-gray-500 text-white'> 
        <ul className='w-60 flex flex-col px-4 text-black py-10 text-xl justify-around gap-10 '>
            <button className=' rounded-[5px] text-left p-2 bg-[#f3f4f6]'>Dashboard </button>
            <button className=''>Dashboard </button>
            <button className=''>Dashboard </button>
            <button className=''>Dashboard </button>
            <button className=''>Dashboard </button>
        </ul>
    </div>
  )
}