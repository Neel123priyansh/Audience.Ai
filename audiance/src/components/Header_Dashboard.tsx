import React from 'react'
import { useState } from 'react';

 export default function Header_Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='z-50 w-full px-10 flex justify-between border-b-1 border-black items-center max-w-[100%] text-white h-24'>
        <h1 className='text-4xl font-bold text-black'>Audiance.Ai</h1>
        <ul className='flex flex-row gap-6 justify-center items-center text-xl text-[#000000] font-urbanist '>   
              <div className="relative">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600 cursor-pointer">
        <span className="font-medium text-gray-600 dark:text-gray-300">PN</span>
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
          {/* User Info */}
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>

          {/* Menu Links */}
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>

          {/* Sign out */}
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
        </ul>
    </div>
  )
}

