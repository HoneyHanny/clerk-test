import { SignedOut } from '@clerk/nextjs'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SignedOut>{children}</SignedOut>
}
