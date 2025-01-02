'use client'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { toast } from 'react-toastify'
import { ResponseError } from '@/types/error.types'
import { Button } from '../../button'
import { useAuth } from '@/hooks/useAuth'

export default function Logout() {
	const router = useRouter()

	const { setIsAuthenticated, setUser } = useAuth()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			setIsAuthenticated(false)
			setUser(null)
			toast.success('Успешный выход')
			router.push('/')
		},
		onError: (error: ResponseError) => {
			toast.error('Что-то пошло не так')
		},
	})

	const { mutate: logoutEverywhere } = useMutation({
		mutationKey: ['logout-everywhere'],
		mutationFn: () => authService.logoutEverywhere(),
		onSuccess: () => {
			setIsAuthenticated(false)
			setUser(null)
			toast.success('Успешный выход')
			router.push('/')
		},
		onError: (error: ResponseError) => {
			toast.error('Что-то пошло не так')
		},
	})

	return (
		<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
			<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
				Выход
			</h2>
			<div className='flex gap-x-4'>
				<Button onClick={() => logout()} size={'lg'} variant={'destructive'}>
					Выйти из аккаунта
				</Button>
				<Button
					onClick={() => logoutEverywhere()}
					className='h-11'
					variant={'logout'}
				>
					Выйти со всех устройств
				</Button>
			</div>
		</div>
	)
}
