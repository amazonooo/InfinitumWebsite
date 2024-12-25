import { updatePassword } from '@/services/update-password.service'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const useChangePassword = () => {
	const [isLoading, setIsLoading] = useState(false)

	const changePassword = async (
		currentPassword: string,
		newPassword: string,
		confirmPassword: string
	) => {
		setIsLoading(true)
		try {
			await updatePassword.UpdatePassword(currentPassword, newPassword, confirmPassword)
			toast.success('Пароль успешно изменён!')
		} catch (error: any) {
			toast.error(
				error.response?.data?.message || 'Ошибка при изменении пароля'
			)
		} finally {
			setIsLoading(false)
		}
	}

	return { changePassword, isLoading }
}