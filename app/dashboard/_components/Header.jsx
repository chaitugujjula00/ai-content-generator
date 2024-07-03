import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between'>
        <div className='flex gap-2 items-center p-2 border rounded-md w-96 '>
            <Search/>
            <input type='text' placeholder='Search...' className='bg-background outline-none'/>
        </div>
        <div className='bg-primary items-center rounded-full text-sm text-white px-4 py-2.5'>
            Join Premium just for Rs.100/Month
        </div>
    </div>
  )
}

export default Header