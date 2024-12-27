import { axiosWithAuth } from '@/api/interceptors'
import { IChangePasswordDto } from '@/components/ui/user/safety/Safety'
import { API_URL } from '@/constants/api.constants'
import { IUserProfile } from '@/types/user.types'

class UserService {
	private BASE_URL = `${API_URL}/user`

	async getUserProfile() {
		const response = await axiosWithAuth.get<IUserProfile>(this.BASE_URL)
		if (!response.data) {
			throw new Error('Профиль пользователя не найден')
		}		
		return response.data
	}

	async changePassword(data: IChangePasswordDto) {
		const response = await axiosWithAuth.patch<IUserProfile>(
			`${this.BASE_URL}/settings/change-password`,
			data
		)
		return response.data
	}
}

export const userService = new UserService()
