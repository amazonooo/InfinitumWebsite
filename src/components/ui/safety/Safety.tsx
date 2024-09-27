'use client'

import { FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '../modal/Modal'
import { Eye, KeyRound, EyeOff, Trash2, Check, ShieldHalf } from 'lucide-react'
import styles from '../field/Field.module.scss'
import { cn } from '@/lib/utils'
import { FaDiscord, FaTelegram, FaVk } from 'react-icons/fa6'
import { FloatingDock } from '../floating-dock'

const Safety: FC = () => {
	// const [isOpen, setIsOpen] = useState(false)
	const [isTwoFactorOpen, setIsTwoFactorOpen] = useState(false)
	const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)
	const [isShowPassword, setIsShowPassword] = useState(false)

	 const links = [
			{
				title: 'Телеграм',
				icon: (
					<FaTelegram className='h-full w-full text-neutral-500 dark:text-neutral-300' />
				),
				href: '#!',
			},

			{
				title: 'Дискорд',
				icon: (
					<FaDiscord className='h-full w-full text-neutral-500 dark:text-neutral-300' />
				),
				href: '#!',
			},
			{
				title: 'Вконтакте',
				icon: (
					<FaVk className='h-full w-full text-neutral-500 dark:text-neutral-300' />
				),
				href: '#!',
			},
		]

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
						<Button
							onClick={() => setIsTwoFactorOpen(true)}
							variant={'outline'}
							className='text-base md:text-lg whitespace-nowrap px-4 py-1.5'
						>
							Подключить
						</Button>
						{isTwoFactorOpen && (
							<Modal
								onClose={() => setIsTwoFactorOpen(false)}
								isOpen={isTwoFactorOpen}
								header={'Двухфакторная аутентификация'}
								icon={<ShieldHalf className='text-primary-pink' />}
							>
								<div className='p-4'>
									<div className='flex items-center justify-center w-full'>
										<FloatingDock
											mobileClassName='' // only for demo, remove for production
											items={links}
										/>
									</div>
								</div>
							</Modal>
						)}
					</div>

					<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
						<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
							Почта
						</h2>
						<Button
							variant={'outline'}
							className='text-base md:text-lg whitespace-nowrap w-max px-4 py-1.5'
						>
							Изменить
						</Button>
					</div>

					<div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
						<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
							Пароль
						</h2>
						<Button
							onClick={() => setIsChangePasswordOpen(true)}
							variant={'outline'}
							className='text-base md:text-lg whitespace-nowrap w-max px-4 py-1.5'
						>
							Изменить
						</Button>
						{isChangePasswordOpen && (
							<Modal
								header={'Изменение пароля'}
								icon={<KeyRound className='text-primary-pink' />}
								onClose={() => setIsChangePasswordOpen(false)}
								isOpen={isChangePasswordOpen}
							>
								<div className='p-4 text-center'>
									<label className={cn(styles.field, 'mb-2 mt-6')}>
										<div className={styles.icon}>
											<Trash2 />
										</div>
										<input
											className='bg-transparent outline-none'
											placeholder='Старый пароль'
											type={isShowPassword ? 'text' : 'password'}
										/>
										<div
											className={styles.icon}
											onClick={() => setIsShowPassword(!isShowPassword)}
										>
											{isShowPassword ? <Eye /> : <EyeOff />}
										</div>
									</label>
									<label className={cn(styles.field, 'mb-2 mt-6')}>
										<div className={styles.icon}>
											<KeyRound />
										</div>
										<input
											className='bg-transparent outline-none'
											placeholder='Придумай новый пароль'
											type={isShowPassword ? 'text' : 'password'}
										/>
										<div
											className={styles.icon}
											onClick={() => setIsShowPassword(!isShowPassword)}
										>
											{isShowPassword ? <Eye /> : <EyeOff />}
										</div>
									</label>
									<label className={cn(styles.field, 'mb-2 mt-6')}>
										<div className={styles.icon}>
											<Check />
										</div>
										<input
											className='bg-transparent outline-none'
											placeholder='Введи новый пароль повторно'
											type={isShowPassword ? 'text' : 'password'}
										/>
										<div
											className={styles.icon}
											onClick={() => setIsShowPassword(!isShowPassword)}
										>
											{isShowPassword ? <Eye /> : <EyeOff />}
										</div>
									</label>
									<Button
										onClick={() => setIsChangePasswordOpen(false)}
										className='text-center mt-6'
									>
										Подтвердить
									</Button>
								</div>
							</Modal>
						)}
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