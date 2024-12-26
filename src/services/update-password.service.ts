import { axiosWithAuth } from '@/api/interceptors'
import { API_URL } from '@/constants/api.constants'
import { saveTokenToStorage } from './auth-token.service'

class UpdatePassword {
	private BASE_URL = `${API_URL}/user/settings/change-password`

	async UpdatePassword(
		currentPassword: string,
		newPassword: string,
		confirmPassword: string
	) {
		const response = await axiosWithAuth.patch(this.BASE_URL, {
			currentPassword,
			newPassword,
			confirmPassword,
		})

		return response.data
	}
}

export const updatePassword = new UpdatePassword()