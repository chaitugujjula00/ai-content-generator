import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TemplateCard = (template) => {
  return (
    <Link href={'/dashboard/content/'+template.slug}>
    <div className='p-5 shadow-md rounded-lg border bg-card flex flex-col gap-3 cursor-pointer transition-all duration-200 hover:scale-105 hover:drop-shadow-xl'>
        <Image src={template.icon} alt='icon' width={50} height={50} />
        <hr className='border-secondary' />
        <h2 className='font-medium text-lg text-primary'>{template.name}</h2>
        <p className='text-popover line-clamp-3'>{template.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard