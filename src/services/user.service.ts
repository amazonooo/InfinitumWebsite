import { axiosWithAuth } from '@/api/interceptors'
import { API_URL } from '@/constants/api.constants'
import { IUserProfile } from '@/types/user.types'

class UserService {
	private BASE_URL = `${API_URL}/user`

	async getUserProfile() {
		const response = await axiosWithAuth.get<IUserProfile>(this.BASE_URL)
		return response.data
	}
}

export const userService = new UserService()