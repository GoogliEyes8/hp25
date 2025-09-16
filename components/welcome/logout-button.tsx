'use client'
import React from 'react'
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

export default function LogoutButton() {
  return (
    <>
      <Button size="sm" className='cursor-pointer' onClick={() => authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success('Logout successful');
            redirect('/');
          }
        }
      })}>Logout</Button>
    </>
  )
}
