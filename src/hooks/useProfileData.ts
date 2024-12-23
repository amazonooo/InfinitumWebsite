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
		queryFn: () => userService.getUserProfile(),
		staleTime: 5 * 60 * 1000,
		refetchOnWindowFocus: false,
	})

	return {
		userProfile,
		isLoading,
		error: error instanceof Error ? error.message : null,
	}
}
