"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const CreateNewContent = (props) => {
    const selectedTemplate =  Templates.find((item)=>item.slug==props.params['template-slug'])

    const GenerateAIContent = (formData)=>{

    }
  return (
    <div className='p-5'>
      <Link href={'/dashboard'}><Button> <ArrowLeft/> Back </Button></Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
          <FormSection selectedTemplate = {selectedTemplate} userFormInput={(v)=>GenerateAIContent(v)}/>

          <div className='col-span-2'>
            <OutputSection/>
          </div>
      </div>
    </div>
  )
}

export default CreateNewContent