'use client'

import { authService } from '@/services/auth.service'
import { ResponseError } from '@/types/error.types'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function ExitFromAcc() {
  const router = useRouter()

  const { mutate: logout } = useMutation({
    mutationKey: ['logout from acc'],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      router.replace('/')
      toast.success('Успешный выход')
    },
    onError: (error: ResponseError) => {
      toast.error('Что-то пошло не так')
      console.log(error.status)
    }
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