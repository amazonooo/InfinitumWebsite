'use client'

import { useProfileData } from '@/hooks/useProfileData'
import { Suspense } from 'react'
import { Skeleton } from '../skeleton'

export default function Username() {
  const { userProfile, isLoading } = useProfileData()

  return (
		<Suspense fallback={<div>Loading...</div>}>
			{isLoading ? (
				<div className='w-full mb-6 flex items-center justify-center'>
					<Skeleton className='h-2 rounded-lg w-32' />
				</div>
			) : (
				<h1 className='text-2xl font-bold text-white mb-6'>
					{userProfile?.user.username || 'Гость'}
				</h1>
			)}
		</Suspense>
	)
}