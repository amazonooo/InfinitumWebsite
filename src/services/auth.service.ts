import { axiosClassic } from '@/api/interceptors'
import { removeFromStorage, saveTokenToStorage } from './auth-token.service'
import { IAuthResponse, IAuthForm } from '@/types/auth.types'

export const authService = {
	// type убрать, data: ILoginForm
	async login(type: 'email' | 'username', data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/login`, {...data, type})

		if (response.data.accessToken) {
			saveTokenToStorage(response.data.accessToken)
			console.log(response.data.accessToken)
		}

		return response
	},

	async register(data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/register`, data)

		if (response.data.accessToken) saveTokenToStorage(response.data.accessToken)

		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>('/auth/login/access-token')

		if (response.data.accessToken) saveTokenToStorage(response.data.accessToken)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('auth/logout')

		if (response.data) removeFromStorage()

		return response
	}
}