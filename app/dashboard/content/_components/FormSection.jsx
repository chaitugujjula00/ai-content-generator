"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const FormSection = ({selectedTemplate, userFormInput, loading}) => {
    const [formData, setFormData] = useState();
    const handleInputChange = (e) => {
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        userFormInput(formData)
    }
  return (
    <div className='p-5 shadow-md border border-muted rounded-lg bg-card'>
        <Image src={selectedTemplate.icon} alt='icon' width={70} height={70}/>
        <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate.name}</h2>
        <p className='text-sm text-muted'>{selectedTemplate.desc}</p>

        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate.form.map((item,index)=>(
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='font-bold'>{item.label}</label>
                    {item.field=='input' ? 
                    <Input name={item.name} required={item.required} onChange={handleInputChange}/> : item.field=='textarea' ? 
                    <Textarea name={item.name} required={item.required} onChange={handleInputChange}/>:null}
                </div>
            ))}

            <Button type='Submit' className='w-full py-6 bg-primary text-primary-foreground' disabled={loading}>{loading ?<Loader2Icon className='animate-spin mr-2'/>:null} Generate Content</Button>
        </form>
    </div>
  )
}

export default FormSection