import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function BackToHome() {
  return (
    <Button asChild className='cursor-pointer' variant="secondary"><Link href="/">Back to home</Link></Button>
  )
}
