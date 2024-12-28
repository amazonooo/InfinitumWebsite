'use client'

import { useAuth } from '@/hooks/useAuth'
import { userService } from '@/services/user.service'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import styles from '@/components/ui/field/Field.module.scss'

export function EmailConfirmationNotification() {
	const { isEmailConfirmed, setIsEmailConfirmed, isAuthenticated, setUser } =
		useAuth()

	if (!isAuthenticated) {
		return null
	}

	const handleResendConfirmation = async () => {
		try {
			if (isEmailConfirmed) {
				toast.success('Почта уже подтверждена')
				return
			}

			await userService.emailConfirmation()
			toast.success('Письмо отправлено')
			setIsEmailConfirmed(true)
			const userProfile: any = await userService.getUserProfile()
			setUser(userProfile)
		} catch (error) {
			toast.error('Ошибка при отправке письма')
		}
	}

	useEffect(() => {
		if (isEmailConfirmed) {
			toast.success('Почта подтверждена')
		}
	}, [isEmailConfirmed])

	return !isEmailConfirmed ? (
		<div className='fixed bottom-10 right-5 bg-main-black border border-white/20 text-zinc-200 p-4 rounded-lg shadow-lg z-50 flex flex-col items-center justify-center'>
			<h1 className='mb-5'>Пожалуйста, подтвердите ваш email!</h1>
			<button onClick={handleResendConfirmation} className={styles.form_btn}>
				Отправить письмо
			</button>
		</div>
	) : null
}
