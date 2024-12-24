'use client'

import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { toast } from 'react-toastify'
import { ResponseError } from '@/types/error.types'
import { Button } from '../../button'

export default function Logout() {
  const router = useRouter()

  const { mutate: logout } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      toast.success('Успешный выход')
      router.push('/login')
    },
    onError: (error: ResponseError) => {
      toast.error('Что-то пошло не так')
      console.log(error.status)
    }
  })

  return (
		<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
			<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
				Выход
			</h2>
			<Button onClick={() => logout()} size={'lg'} variant={'destructive'}>
				Выйти из аккаунта
			</Button>
		</div>
	)
}