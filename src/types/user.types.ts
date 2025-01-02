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
	isEmailConfirmed: boolean
	ipHistory: string[]
	lastIp: string
	telegramId: string | null
	banned: boolean
	banReason: string
	banEnds: number | null
	bannedAt: number | null
	banGiverId: string | null
	banGiverNickname: string | null
	warns: number
	balance: number
	money: number
}

export interface IPlayerServerStats {
	nickname: string
	lastLogin: string
	muted: boolean
	mutedAt: string
	muteEnds: string
	muteReason: string
	donateRole: string
	role: string
	money: number
	playtime: string
	deaths: string
	kills: string
	killedMobs: string
	messagesCount: string
	serverId: string
	clientId: string
	clientTitle: string
}

export interface IUserProfile {
	user: IUser
	stats: IPlayerServerStats
}
// IPlayerServerStats[]
