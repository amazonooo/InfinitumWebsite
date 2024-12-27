'use client'

import { useProfileData } from '@/hooks/useProfileData'
import { Suspense, useEffect } from 'react'
import Safety from './safety/Safety'
import { Skeleton } from '../skeleton'
import { Loader } from 'lucide-react'
import Information from './information/Information'

export default function UserInfo() {
	const { userProfile, isLoading } = useProfileData()
	console.log(userProfile)

	useEffect(() => {
		isLoading
	}, [userProfile])

	return (
		<Suspense fallback={<div><Loader /></div>}>
			<div className='mb-20'>
				<Information />
			</div>
			<div className=''>
				<Safety />
			</div>
		</Suspense>
	)
}