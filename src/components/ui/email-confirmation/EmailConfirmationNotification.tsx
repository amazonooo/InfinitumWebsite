'use client'

import { useAuth } from '@/hooks/useAuth'
import { userService } from '@/services/user.service'
import { toast } from 'react-toastify'
import styles from '@/components/ui/field/Field.module.scss'
import { ResponseError } from '@/types/error.types'
import { useQueryClient } from '@tanstack/react-query'

export function EmailConfirmationNotification() {
	const { isEmailConfirmed, isAuthenticated } = useAuth()

	if (!isAuthenticated || isEmailConfirmed) {
		return null
	}

	const queryClient = useQueryClient()

	const handleResendConfirmation = async () => {
		try {
			await userService.emailConfirmation()
			toast.success('Письмо с подтверждением отправлено')
		} catch (error: ResponseError | any) {
			if (error.status && error.status === 400) {
				toast.success('Почта уже подтверждена')
				queryClient.invalidateQueries({
					queryKey: ['userProfile'],
				})
			}
		}
	}

	return (
		<div className='fixed bottom-10 right-5 bg-main-black border border-white/20 text-zinc-200 p-4 rounded-lg shadow-lg z-50 flex flex-col items-center justify-center'>
			<h1 className='mb-5'>Пожалуйста, подтвердите ваш email!</h1>
			<button onClick={handleResendConfirmation} className={styles.form_btn}>
				Отправить письмо
			</button>
		</div>
	)
}
