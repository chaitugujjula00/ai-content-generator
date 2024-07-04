"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { TotalUsageContext } from '../(context)/TotalUsageContext'
import { UpdateCreditsUsageContext } from '../(context)/UpdateCreditsUsage'

function layout({children}) {

  const [totalUsage,setTotalUsage] = useState(0)
  const [updateCreditUsage,setUpdateCreditUsage] = useState()
  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UpdateCreditsUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
      <div className='h-screen'>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav/>
      </div>
      <div className='md:ml-64'>
        <Header />
        {children}
      </div>
      </div>
      </UpdateCreditsUsageContext.Provider>

    </TotalUsageContext.Provider>
  )
}

export default layout