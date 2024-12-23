'use client'

import { useProfileData } from '@/hooks/useProfileData'
import { Suspense } from 'react'

export default function UserInfo() {
	const { userProfile } = useProfileData()
	console.log(userProfile)

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<h1>User Profile</h1>
			<p>Nickname: {userProfile?.user.username || 'Guest'}</p>
			<div className='mt-5 border border-green-300 p-3 rounded-lg'>
				<h1>Статистика</h1>
				<p>Email: {userProfile?.user.email}</p>
				{/* <p>Монеты: {userProfile?.stats[0].money || '0'}</p> */}
				<p>Киллы: {userProfile?.stats[0].kills || '0'}</p>
				<p>Игровое время: {userProfile?.stats[0].playtime || '0'}</p>
				<p>Роль: {userProfile?.stats[0].role}</p>
				<p>Донатная роль: {userProfile?.stats[0].donateRole}</p>
			</div>
		</Suspense>
	)
}