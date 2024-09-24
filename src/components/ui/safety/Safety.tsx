'use client'

import { FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '../modal/Modal'

const Safety: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

  return (
		<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'>
			<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
				<h1 className='text-center Welcome-text text-3xl xl:text-4xl'>
					Безопасность
				</h1>
				<div className='flex flex-col mt-9 mb-3 gap-y-6'>
					<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
						<h2 className='text-xs sm:text-base md:text-lgl'>
							Двухфакторная аутентификация
						</h2>
						<Button onClick={() => setIsOpen(true)} variant={'outline'} className='text-base md:text-lg whitespace-nowrap px-4 py-1.5'>
							Подключить
						</Button>
						{isOpen && (
							<Modal />
						)}
					</div>

					<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
						<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
							Почта
						</h2>
						<Button variant={'outline'} className='text-base md:text-lg whitespace-nowrap w-max px-4 py-1.5'>
							Изменить
						</Button>
					</div>

					<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
						<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
							Пароль
						</h2>
						<Button variant={'outline'} className='text-base md:text-lg whitespace-nowrap w-max px-4 py-1.5'>
							Изменить
						</Button>
					</div>

					<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
						<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
							Выход
						</h2>
						<Button size={'lg'} variant={'destructive'}>
							Выйти из аккаунта
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Safety