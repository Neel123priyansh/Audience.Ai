import React from 'react'

export default function Side_pannel() {
  return (
    <div className='fixed w-60 h-full px-10 flex flex-col border-b-1 border-r-1 border-gray-500 text-white'> 
        <ul className='max-w-full flex flex-col py-10 justify-around gap-10 '>
            <button className=''>Dashboard </button>
            <button className=''>Dashboard </button>
            <button className=''>Dashboard </button>
            <button className=''>Dashboard </button>
            <button className=''>Dashboard </button>
        </ul>
    </div>
  )
}