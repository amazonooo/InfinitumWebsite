import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { authService } from '@/services/auth.service'

export default function useCheckAvailability() {
	const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
		null
	)
	const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null)
	const [usernameError, setUsernameError] = useState<string | null>(null)
	const [emailError, setEmailError] = useState<string | null>(null)

	const checkUsername = debounce(async (username: string) => {
		if (!username) {
			setUsernameAvailable(null)
			return
		}
		try {
			const isAvailable = await authService.checkUsernameAvailability(username)
			setUsernameAvailable(isAvailable)
			setUsernameError(isAvailable ? null : 'Имя пользователя уже занято')
		} catch {
			setUsernameError('Ошибка проверки имени пользователя')
		}
	}, 300)

	const checkEmail = debounce(async (email: string) => {
		if (!email) {
			setEmailAvailable(null)
			return
		}
		try {
			const isAvailable = await authService.checkEmailAvailability(email)
			setEmailAvailable(isAvailable)
			setEmailError(isAvailable ? null : 'Email уже используется')
		} catch {
			setEmailError('Ошибка проверки email')
		}
	}, 300)

	return {
		usernameAvailable,
		emailAvailable,
		usernameError,
		emailError,
		checkUsername,
		checkEmail,
	}
}
