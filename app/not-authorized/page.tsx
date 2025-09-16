import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotVerified() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-4">
      <div>User Not Authorized, please contact your Administrator</div>
      <Button asChild className='cursor-pointer'><Link href="/">Back to home</Link></Button>
    </main>
  )
}
