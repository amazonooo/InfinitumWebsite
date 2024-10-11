import { IUser } from './user.types'

export interface IAuthForm {
	email: string
	username: string
	password: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}