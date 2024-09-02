import { SignedOut, SignUp } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <SignedOut>
        <SignUp forceRedirectUrl={`http://localhost:3000/workspace`} signInUrl='http://localhost:3000/login'/>
      </SignedOut>
    </div>
  )
}

export default Page
