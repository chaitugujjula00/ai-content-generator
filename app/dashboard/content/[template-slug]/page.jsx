"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditsUsageContext } from '@/app/(context)/UpdateCreditsUsage'

const CreateNewContent = (props) => {
    const selectedTemplate =  Templates.find((item)=>item.slug==props.params['template-slug'])
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState('')
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const {user} = useUser();
    const router  = useRouter();
    const {updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditsUsageContext)

    /**
     * Used to generate content from AI
     * @param  formData
     * @returns 
     */

    const GenerateAIContent = async (formData)=>{
      setLoading(true);
      console.log(formData)
      const SelectedPrompt = selectedTemplate.aiPrompt;
      
      const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt)
      console.log(result.response.text())
      setAiOutput(result.response.text())
      await SaveInDb(formData, selectedTemplate?.slug, result.response.text(), selectedTemplate?.icon)
      setLoading(false);
      setUpdateCreditUsage(Date.now())
    }

    const SaveInDb = async(formData, slug, aiOutput,image) =>{
      const result = await db.insert(AIOutput).values({
        icon:image,
        formData:formData,
        templateSlug:slug,
        aiResponse:aiOutput,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD/MM/yyyy')
      })

      console.log(result)
    }
    if(totalUsage>=10000){
      router.push('/dashboard/billing')
      return;

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