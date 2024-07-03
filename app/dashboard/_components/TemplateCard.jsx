import Image from 'next/image'
import React from 'react'

const TemplateCard = (template) => {
  return (
    <div className='p-5 shadow-md rounded-lg border bg-[#767676] flex flex-col gap-3 cursor-pointer transition-all duration-200 hover:scale-105'>
        <Image src={template.icon} alt='icon' width={50} height={50} />
        <h2 className='font-medium text-lg text-[#ffffff]'>{template.name}</h2>
        <p className='text-[#e0e0e0] line-clamp-3'>{template.desc}</p>
    </div>
  )
}

export default TemplateCard