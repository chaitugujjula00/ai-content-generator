import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header class="bg-primary text-primary-foreground p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="text-3xl font-bold">Craftlab</h1>
      </div>
      <nav class="space-x-4">
        <a href="/" class="hover:underline">Home</a>
        <a href="#features" class="hover:underline">Features</a>
        <a href="#pricing" class="hover:underline">Pricing</a>
        <a href="#about" class="hover:underline">About Us</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </nav>
      <div className='flex gap-4'>
        <Link href='/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard'><Button variant={'secondary'}>Login</Button></Link> 
        <Link href='/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard'><Button variant={'secondary'}>Sign Up</Button></Link>
      </div>
    </div>
  </header>
  )
}

export default Header