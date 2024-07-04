"use client"
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { Copy } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const History = () => {
    const [history,setHistory] = useState([]);
    const {user} = useUser();
    const check = async()=>{
        const results = await db.select().from(AIOutput).where('createdBy'===user?.primaryEmailAddress?.emailAddress);
        setHistory(results);
        console.log(results)
    }
    useEffect(()=>{
        check();
    },[db])
  return (
    <div className='flex flex-col gap-4 m-14'>
        <div className='grid grid-cols-7 text-left bg-gray-300 font-bold text-medium p-2 gap-3'>
            <p className='col-span-2'>TEMPLATE</p>
            <p className='col-span-2'>AI RESP</p>
            <p>DATE</p>
            <p>WORDS</p>
            <p>COPY</p>
        </div>
        {history.map((item,index)=>(
            <div className='grid grid-cols-7 text-left p-2 gap-3'>
                <p className='text-wrap col-span-2 flex gap-3 items-center'><Image src={item.icon} alt='icon' width={45} height={45}/> {item.templateSlug}</p>
                <p className='col-span-2 line-clamp-3'>{item.aiResponse}</p>
                <p>{item.createdAt}</p>
                <p>{item.aiResponse.length}</p>
                <Button onClick={()=>{navigator.clipboard.writeText(item.aiResponse);}} className=' w-[80%] flex gap-2 bg-secondary text-secondary-foreground'><Copy/> Copy</Button>
            </div>
        ))}


    </div>
  )
}

export default History