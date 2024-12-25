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
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}