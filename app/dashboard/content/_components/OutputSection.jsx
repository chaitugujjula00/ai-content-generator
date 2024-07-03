import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = () => {
    const editorRef = useRef();
  return (
    <div className='bg-card border border-muted rounded-lg'>
        <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2 bg-secondary text-secondary-foreground'><Copy/> Copy</Button>
        </div>
        <Editor
        ref={editorRef}
    initialValue="Your Result will appear here"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
    className='text-white'
  />
    </div>
  )
}

export default OutputSection