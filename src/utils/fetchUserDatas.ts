import { userService } from '@/services/user.service'

export async function fetchUserDatas() {
	try {
		const userProfile = await userService.getUserProfile()
		const userStats = userProfile.stats?.[0] || null

		return { userProfile, userStats }
	} catch (error) {
		console.error('Failed to fetch user profile:', error)
		return { userProfile: null, userStats: null }
	}
}
