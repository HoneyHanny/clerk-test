'use client'
import ApiRow from '@/components/api-row'
import React, { useEffect, useState } from 'react'

interface Endpoint {
  url: string
  method: Method
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Page = () => {
  const [response, setResponse] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [emails, setEmails] = useState<string[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        await getUserDetails()
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  const getUserDetails = async () => {
    const response = await fetch('api/user', {
      method: 'GET',
    })

    const object = await response.json()

    console.log(username)
    setUsername(object.user.username)
    setEmails(object.user.emails)
  }

  const displayResponse = (data: any) => {
    const json = JSON.stringify(data, null, 4)
    setResponse(json)
  }

  const endpoints: Endpoint[] = [
    {
      url: 'api/test',
      method: 'POST',
      handleClick: async () => {
        const response = await fetch('api/test', {
          method: 'POST',
        })
        console.log(response)

        displayResponse(await response.json())
      },
    },
    {
      url: 'api/test',
      method: 'GET',
      handleClick: async () => {
        const response = await fetch('api/test', {
          method: 'GET',
        })

        displayResponse(await response.json())
      },
    },
    {
      url: 'api/test',
      method: 'PUT',
      handleClick: async () => {
        const response = await fetch('api/test', {
          method: 'PUT',
        })

        displayResponse(await response.json())
      },
    },
    {
      url: 'api/test',
      method: 'PATCH',
      handleClick: async () => {
        const response = await fetch('api/test', {
          method: 'PATCH',
        })

        displayResponse(await response.json())
      },
    },
    {
      url: 'api/test',
      method: 'DELETE',
      handleClick: async () => {
        const response = await fetch('api/test', {
          method: 'DELETE',
        })

        displayResponse(await response.json())
      },
    },
  ]

  return (
    <main className='p-12 gap-8 flex flex-col'>
      <h1 className='text-center'>Hi {username}</h1>
      <h2 className='text-center'>Test the API</h2>
      <div className='flex flex-col gap-4 w-full'>
        {endpoints.map((endpoint, index) => (
          <ApiRow key={index} name={endpoint.url} method={endpoint.method} handleClick={endpoint.handleClick} />
        ))}
      </div>
      <div className='border rounded-lg shadow-sm p-4 font-mono'>{response}</div>
    </main>
  )
}

export default Page
