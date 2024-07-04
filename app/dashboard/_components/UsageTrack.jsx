"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'

const UsageTrack = () => {
    const [result,setResult] = useState([])
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const {user} = useUser();
    
    useEffect(()=>{
        result&&GetTotalUsage();
    },[result&&user])
    const GetTotalUsage = () =>{
        let totalVal=0;
        result.forEach(element => {
            totalVal=totalVal+element.aiResponse?.length
        })
        setTotalUsage(totalVal);
        console.log(totalVal)
    }

    const check = async()=>{
        const results = await db.select().from(AIOutput).where('createdBy'===user?.primaryEmailAddress?.emailAddress);
        setResult(results);
        GetTotalUsage()
    }
    useEffect(()=>{
        check();
    },[db])
  return (
    <div className='m-5'>
        <div className='bg-primary text-secondary-foreground rounded-lg p-3'>
            <h2>Credits</h2>
            <div className='h-2 bg-[hsl(0,0%,25%)] w-full rounded-full mt-3'>
                <div className='h-2 bg-secondary rounded-full'
                    style={{
                        width:(totalUsage/10000)*100+'%'
                    }}>
                </div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/10,000 Credit Used</h2>
        </div>
        <Button variant={'secondary'}  className='w-full my-3'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack