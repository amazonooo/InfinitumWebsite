export interface IAuthForm {
	email: string
	username: string
	password: string
}

//TODO: Добавить tg username
export interface IUser {
	id: string
	createdAt: string
	role: string
	donateRole: string
	skinUrl: string
	avatarUrl: string
	email: string
	username: string
	displayName: string
	ipHistory: string[]
	lastIp: string
	telegramId: string | null
	banned: boolean
	banReason: string
	bannedAt: number | null
	banEnds: number | null
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}