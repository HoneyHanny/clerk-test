import { SignedOut, SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignedOut>
        <SignIn forceRedirectUrl={`http://localhost:3000/workspace`} signUpUrl='http://localhost:3000/register' />
      </SignedOut>
    </div>
  )
}

export default Page
