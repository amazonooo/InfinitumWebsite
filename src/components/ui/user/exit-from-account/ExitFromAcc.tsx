'use client'

import { useAuth } from '@/hooks/useAuth'
import { authService } from '@/services/auth.service'
import { ResponseError } from '@/types/error.types'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function ExitFromAcc() {
	const router = useRouter()
	const { setIsAuthenticated, setUser } = useAuth()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			setIsAuthenticated(false)
			setUser(null)
			router.replace('/')
			toast.success('Успешный выход')
		},
		onError: (error: ResponseError) => {
			toast.error('Что-то пошло не так')
		},
	})

	return (
		<button
			onClick={() => logout()}
			className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 whitespace-nowrap group items-center'
		>
			<LogOut
				size={15}
				className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100'
			/>
			<span className='relative transition-all duration-300 after:content-[""] after:absolute after:top-[105%] after:h-[1px] after:left-0 after:w-0 after:transition-all after:duration-300 after:bg-white group-hover:opacity-100 visible group-hover:after:w-[100%] group-hover:ml-5'>
				Выйти
			</span>
		</button>
	)
}
