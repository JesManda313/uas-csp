'use client'

import { useState } from 'react'
import { signout } from '@/app/auth/actions' 

export default function Navbar({ userEmail }: { userEmail: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-white to-blue-200 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        
          <div className="flex items-center">
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              UAS<span className="text-blue-600">Csp</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-sm font-medium text-gray-700">
              Hello, <span className="text-gray-900 font-bold">{userEmail}</span>
            </span>
            <button 
              onClick={() => signout()} 
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Logout
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <div className="block px-3 py-2 text-base font-medium text-gray-500 border-b border-gray-100 mb-2">
              Login as: <br/>
              <span className="text-gray-900 font-bold">{userEmail}</span>
            </div>
            
            <button
              onClick={() => signout()}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50 hover:text-red-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}