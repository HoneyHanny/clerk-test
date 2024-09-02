import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export const POST = (req: NextRequest) => {
  auth().protect()
  return new NextResponse(JSON.stringify({ message: 'test post response' }), { status: 200 })
}

export const GET = (req: NextRequest) => {
  auth().protect()
  return new NextResponse(JSON.stringify({ message: 'test get response' }), { status: 200 })
}

export const PUT = () => {
  auth().protect()
  return new NextResponse(JSON.stringify({ message: 'test put response' }), { status: 200 })
}

export const PATCH = () => {
  auth().protect()
  return new NextResponse(JSON.stringify({ message: 'test patch response' }), { status: 200 })
}

export const DELETE = () => {
  auth().protect()
  return new NextResponse(JSON.stringify({ message: 'test delete response' }), { status: 200 })
}
