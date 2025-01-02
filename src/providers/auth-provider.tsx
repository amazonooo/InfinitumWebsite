'use client'

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import { IUser } from '@/types/user.types'
import { useProfileData } from '@/hooks/useProfileData'

type AuthContextType = {
	isAuthenticated: boolean
	setIsAuthenticated: Dispatch<SetStateAction<boolean>>
	isEmailConfirmed: boolean
	setIsEmailConfirmed: Dispatch<SetStateAction<boolean>>
	user: IUser | null
	setUser: Dispatch<SetStateAction<any>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isEmailConfirmed, setIsEmailConfirmed] = useState(false)
	const [user, setUser] = useState<IUser | null>(null)

	const { userProfile } = useProfileData()

	useEffect(() => {
		if (userProfile) {
			setUser(userProfile.user)
			setIsEmailConfirmed(userProfile.user.isEmailConfirmed)
			setIsAuthenticated(true)
		} else {
			setIsAuthenticated(false)
			setUser(null)
		}
	}, [userProfile])

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
