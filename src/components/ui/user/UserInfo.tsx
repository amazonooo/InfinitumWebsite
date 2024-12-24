'use client'

import { useProfileData } from '@/hooks/useProfileData'
import { Suspense } from 'react'
import Safety from './safety/Safety'

export default function UserInfo() {
	const { userProfile } = useProfileData()
	console.log(userProfile)

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<h1>User Profile</h1>
			<p>Nickname: {userProfile?.user.username || 'Guest'}</p>
			<div className='mt-5'>
				<Safety />
			</div>
		</Suspense>
	)
}