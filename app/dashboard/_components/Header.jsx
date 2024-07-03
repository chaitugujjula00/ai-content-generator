import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 border-b-secondary flex justify-between bg-card'>
        <div className='flex gap-2 items-center p-2 border-2 border-secondary rounded-md w-96 '>
            <Search className='text-secondary'/>
            <input type='text' placeholder='Search...' className='bg-card w-80 outline-none'/>
        </div>
        <div className='bg-primary items-center rounded-full text-sm text-accent-foreground px-4 py-2.5 transition-all hover:drop-shadow-lg hover:cursor-pointer'>
            Join Premium just for Rs.100/Month
        </div>
    </div>
  )
}

export default Header