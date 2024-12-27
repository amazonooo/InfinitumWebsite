'use client'

import { useProfileData } from '@/hooks/useProfileData'
import { Suspense, useEffect } from 'react'
import Safety from './safety/Safety'
import { Skeleton } from '../skeleton'

export default function UserInfo() {
	const { userProfile, isLoading } = useProfileData()
	console.log(userProfile)

	useEffect(() => {
		isLoading
	}, [userProfile])

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<h1>User Profile</h1>
			{isLoading ? (
				<Skeleton className='h-2 w-full rounded-lg' />
			) : (
				<p>Nickname: {userProfile?.user.displayName || 'Guest'}</p>
			)}
			<div className='mt-5'>
				<Safety />
			</div>
		</Suspense>
	)
}