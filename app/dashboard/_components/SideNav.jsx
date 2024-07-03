"use client"
import { FileClock, Home, Settings, Wallet2, Wallet2Icon} from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

    const MenuList = [
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:Wallet2,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
    ]

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='h-screen p-5 shadow-sm border-r border-r-secondary bg-[#090909]'>
        <div className='flex justify-center border-b'>
        <Image src={'/logo.svg'} alt='logo' width={210} height={150} />
        </div>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <div className={`flex gap-2 mb-2 p-3 rounded-lg items-center transition duration-200 hover:drop-shadow-white hover:drop-shadow-3xl hover:bg-primary hover:cursor-pointer hover:text-popover ${path===menu.path && 'bg-primary text-popover'}`}>
                    <menu.icon/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav