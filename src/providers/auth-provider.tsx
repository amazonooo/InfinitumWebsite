'use client'

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import { getAccessToken } from '@/services/auth-token.service'
import { userService } from '@/services/user.service'

type AuthContextType = {
	isAuthenticated: boolean
	setIsAuthenticated: Dispatch<SetStateAction<boolean>>
	isEmailConfirmed: boolean
	setIsEmailConfirmed: Dispatch<SetStateAction<boolean>>
	user: any
	setUser: Dispatch<SetStateAction<any>>
}

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: false,
	setIsAuthenticated: () => {},
	isEmailConfirmed: false,
	setIsEmailConfirmed: () => {},
	user: null,
	setUser: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isEmailConfirmed, setIsEmailConfirmed] = useState(false)
	const [user, setUser] = useState<any>(null)

	useEffect(() => {
		const checkAuth = () => {
			const token = getAccessToken()
			setIsAuthenticated(!!token)
		}
		checkAuth()
	}, [])

	useEffect(() => {
		const fetchUserProfile = async () => {
			if (isAuthenticated) {
				try {
					const userProfile: any = await userService.getUserProfile()
					setUser(userProfile)
					setIsEmailConfirmed(userProfile.emailConfirmed)
				} catch (error) {
					console.error('Ошибка при загрузке профиля', error)
				}
			}
		}

		if (isAuthenticated) {
			fetchUserProfile()
		}
	}, [isAuthenticated])

	// useEffect(() => {
	// 	const emailConfirmedFromCookie = Cookies.get('isEmailConfirmed')
	// 	if (emailConfirmedFromCookie === 'true') {
	// 		setIsEmailConfirmed(true)
	// 	}
	// }, [])

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				isEmailConfirmed,
				setIsEmailConfirmed,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
