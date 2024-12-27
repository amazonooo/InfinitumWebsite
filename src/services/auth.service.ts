import { axiosClassic } from '@/api/interceptors'
import { removeFromStorage, saveTokenToStorage } from './auth-token.service'
import { IAuthResponse, IAuthForm, ILoginForm } from '@/types/auth.types'

export const authService = {
	async login(data: ILoginForm) {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/login`, {
			...data,
			type: data.type,
		})

		if (response.data.accessToken) {
			saveTokenToStorage(response.data.accessToken)
			console.log(response.data.accessToken)
		}

		return response
	},

	async register(data: IAuthForm): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>('/auth/register', data);

		if (response.data?.accessToken) {
			saveTokenToStorage(response.data.accessToken)
		} else {
			throw new Error('Access token is missing in the response.')
		}

		return response.data
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/access-token'
		)

		if (response.data.accessToken) saveTokenToStorage(response.data.accessToken)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('auth/logout')

		if (response.data) removeFromStorage()

		return response
	},

	async checkUsernameAvailability(username: string): Promise<boolean> {
		const response = await axiosClassic.get(`/auth/register/username-available`, {
			data: { username },
		});

		console.log(response.data);
		return response.data;
	},

	async checkEmailAvailability(email: string): Promise<boolean> {
		const response = await axiosClassic.get(`/auth/register/email-available`, {
			data: { email },
		});

		console.log(response.data);
		return response.data;
	}
}