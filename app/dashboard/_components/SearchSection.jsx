import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}) => {
  return (
    <div className='p-10 bg-gradient-to-br from-primary to-secondary flex flex-col gap-3 justify-center items-center'>
        <h2 className='text-3xl font-bold text-background'>Browse All Templates</h2>
        <p className='text-background'>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-lg my-5 bg-background w-[50%]'>
                <Search className='text-primary'/>
                <input type='text' placeholder='Search' className='bg-transparent w-full outline-none'
                onChange={(event)=>onSearchInput(event.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection