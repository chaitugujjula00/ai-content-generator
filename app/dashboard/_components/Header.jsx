import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 border-b-secondary flex justify-between bg-card'>
        <div className='flex gap-2 items-center p-2 border-2 border-secondary rounded-md w-96 '>
            <Search className='text-secondary'/>
            <input type='text' placeholder='Search...' className='bg-card w-80 outline-none'/>
        </div>
        <div className='flex md:gap-5 gap-2 items-center'>
            <h2  className='bg-primary rounded-full text-sm text-accent-foreground md:px-4 px-2 py-2.5 transition-all hover:drop-shadow-lg hover:cursor-pointer'>Join Premium just for Rs.100/Month</h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header