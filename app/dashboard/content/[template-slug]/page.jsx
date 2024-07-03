"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'

const CreateNewContent = (props) => {
    const selectedTemplate =  Templates.find((item)=>item.slug==props.params['template-slug'])

    const GenerateAIContent = (formData)=>{

    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        <FormSection selectedTemplate = {selectedTemplate} userFormInput={(v)=>GenerateAIContent(v)}/>

        <div className='col-span-2'>
        <OutputSection/>
        </div>
    </div>
  )
}

export default CreateNewContent