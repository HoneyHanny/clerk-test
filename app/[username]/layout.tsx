import { Button } from '@/components/ui/button'
import { SignedIn, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SignedIn>
      <header className='flex p-4 justify-around shadow-sm'>
        <h1>HyperText</h1>
        <div className='flex gap-8'>
          <SignOutButton>
            <Button>Logout</Button>
          </SignOutButton>
        </div>
      </header>
      <main>{children}</main>
    </SignedIn>
  )
}

export default Layout
