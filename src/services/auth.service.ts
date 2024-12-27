import { axiosClassic } from '@/api/interceptors'
import {
	removeFromStorage,
	saveAccessTokenToStorage,
} from './auth-token.service'
import {
	IAuthResponse,
	IAuthForm,
	ILoginForm,
	IConfirmPassword,
} from '@/types/auth.types'
import { useQuery } from '@tanstack/react-query'

export const authService = {
	async login(data: ILoginForm) {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/login`, {
			...data,
		})

		if (response.data.accessToken) {
			saveAccessTokenToStorage(response.data.accessToken)
		}

		return response
	},

	async register(data: IAuthForm): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/register',
			data
		)

		if (response.data?.accessToken) {
			saveAccessTokenToStorage(response.data.accessToken)
		} else {
			throw new Error('Access token is missing in the response.')
		}

		return response.data
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/access-token'
		)

		if (response.data.accessToken)
			saveAccessTokenToStorage(response.data.accessToken)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('auth/logout')

		if (response.data) removeFromStorage()

		return response
	},

	async checkAvailability(type: 'username' | 'email', value: string) {
		const response = await axiosClassic.get(
			`/auth/register/${type}-available`,
			{
				params: { [type]: value },
			}
		)

		return response.data
	},

	async resetPasswordRequest(email: string) {
		const response = axiosClassic.post(`/auth/reset-password`, email)

		return response
	},

	async resetPasswordConfirm(password: string, token: string) {
		const response = await axiosClassic.post<IConfirmPassword>(
			`/auth/reset-password/confirm`,
			{ password },
			{
				params: { token },
			}
		)
		return response
	},
}
