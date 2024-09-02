import Landing from '@/components/landing'
import { Button } from '@/components/ui/button'
import { SignedIn, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      <header className='py-4 flex justify-around absolute w-full text-white border-b border-zinc-800 bg-black/50 items-center'>
        <h1 className='text-xl md:text-3xl'>HyperText</h1>
        <div className='text-black flex gap-8'>
          <Link href={'/login'}>
            <Button variant='outline' className='py-1 px-4'>
              Login
            </Button>
          </Link>
          <Link href={'register'}>
            <Button variant='outline' className='py-1 px-4'>
              Register
            </Button>
          </Link>
          <SignedIn>
            <SignOutButton>
              <Button>Logout</Button>
            </SignOutButton>
          </SignedIn>
        </div>
      </header>
      <Landing />
    </>
  )
}

export default Page
