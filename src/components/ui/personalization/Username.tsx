'use client'

import { useProfileData } from '@/hooks/useProfileData'
import { Suspense } from 'react'

export default function Username() {
  const { userProfile } = useProfileData()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1 className='text-2xl font-bold text-white mb-6'>{userProfile?.user.username || 'Гость'}</h1>
    </Suspense>
  )
}