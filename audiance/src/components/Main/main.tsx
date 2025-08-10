import React from 'react'

 export default function Main() {
  return (
    <div className='flex flex-col max-w-max ml-[17rem] py-5 text-left gap-4'>
      <h1 className='text-2xl max-w-max'>DashBoard Overview</h1>
      <span className='text-l max-w-max'>Monitor your brand mentions and keyword tracking across social platforms</span>
      <div className='flex flex-row justify-evenly items-center'>
        <div className='h-40 w-72 bg-[#f3f4f6] rounded-xl flex flex-row '>
          <div className='flex flex-col p-7 gap-2'>
            <h1 className='text-xl'>Total Mentions</h1>
            <h1 className='text-2xl font-bold'>2,000</h1>
            <h1>+12% from last week</h1>
          </div>
        </div>
      </div>
    </div>
  )
}