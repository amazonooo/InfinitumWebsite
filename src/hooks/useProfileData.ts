import { userService } from '@/services/user.service'
import { IUserProfile } from '@/types/user.types'
import { useQuery } from '@tanstack/react-query'

export function useProfileData() {
	const {
		data: userProfile,
		isLoading,
		error,
	} = useQuery<IUserProfile>({
		queryKey: ['userProfile'],
		queryFn: async () => {
			try {
				const profile = await userService.getUserProfile()
				return profile
			} catch (error) {
				throw error
			}
		},
		staleTime: 5 * 60 * 1000,
		refetchOnWindowFocus: false,
		retry: 1,
	})

	return {
		userProfile,
		isLoading,
		error: error,
	}
}
