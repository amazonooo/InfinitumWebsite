import { useProfileData } from '@/hooks/useProfileData'

export default async function UserInfo() {
	const { userProfile, userStats } = useProfileData()
	console.log(userProfile)

	return (
		<div>
			<h1>User Profile</h1>
			<p>Nickname: {userProfile?.user.username || 'Guest'}</p>
			<div className='mt-5 border border-green-300 p-3 rounded-lg'>
				<h1>Статистика</h1>
				<p>Email: {userProfile?.user.email}</p>
				<p>Монеты: {userStats?.money || '0'}</p>
				<p>Киллы: {userStats?.kills || '0'}</p>
				<p>Игровое время: {userStats?.playtime || '0'}</p>
				<p>Роль: {userStats?.role}</p>
				<p>Донатная роль: {userStats?.donateRole}</p>
			</div>
		</div>
	)
}