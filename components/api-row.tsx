import React from 'react'
import { Button } from './ui/button'

const ApiRow = ({ name, method, handleClick }: { name: string; method: Method; handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
  let color: string
  switch (method) {
    case 'POST':
      color = 'text-blue-500'
      break
    case 'GET':
      color = 'text-green-500'
      break
    case 'PUT':
      color = 'text-orange-500'
      break
    case 'PATCH':
      color = 'text-yellow-500'
      break
    case 'DELETE':
      color = 'text-red-500'
      break
  }

  return (
    <div className='p-2 flex justify-between rounded-lg border-border border shadow-sm items-center'>
      <div className='flex justify-between gap-4'>
        <p className={`w-24 font-bold ${color}`}>{method}</p> <code>{name}</code>
      </div>

      <Button variant='default' className='bg-gray-950' onClick={handleClick}>
        Test
      </Button>
    </div>
  )
}

export default ApiRow
