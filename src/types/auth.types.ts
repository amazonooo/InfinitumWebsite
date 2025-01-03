import { IUser } from './user.types'

export interface ILoginForm {
	type: 'username' | 'email'
	identifier: string
	password: string
}

export interface IAuthForm {
	email: string
	username: string
	password: string
	confirmPassword: string
}

export interface IConfirmPassword {
	currentPassword: string
	newPassword: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}
