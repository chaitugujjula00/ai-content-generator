"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModel'

const CreateNewContent = (props) => {
    const selectedTemplate =  Templates.find((item)=>item.slug==props.params['template-slug'])
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState('')
    const GenerateAIContent = async (formData)=>{
      setLoading(true);
      const SelectedPrompt = selectedTemplate.aiPrompt;
      
      const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt)
      setLoading(false);
      console.log(result.response.text())
      setAiOutput(result.response.text())
    }
  return (
    <div className='p-5'>
      <Link href={'/dashboard'}><Button> <ArrowLeft/> Back </Button></Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
          <FormSection selectedTemplate = {selectedTemplate} userFormInput={(v)=>GenerateAIContent(v)} loading={loading}/>

          <div className='col-span-2'>
            <OutputSection aiOutput={aiOutput}/>
          </div>
      </div>
    </div>
  )
}

export default CreateNewContent