'use client'

import { FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, KeyRound, EyeOff, Trash2, Check, ShieldHalf, ArrowBigLeft, Loader2 } from 'lucide-react'
import styles from '../../field/Field.module.scss'
import { cn } from '@/lib/utils'
import { FaDiscord, FaTelegram, FaVk } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import Logout from './Logout'
import Modal from '../../modal/Modal'
import { FloatingDock } from '../../floating-dock'
import { useChangePassword } from '@/hooks/useChangePassword'
import { updatePassword } from '@/services/updatePassword.service'

const Safety: FC = () => {
	// const [isOpen, setIsOpen] = useState(false)
	const { changePassword, isLoading } = useChangePassword()

	const [isShowPastPassword, setIsShowPastPassword] = useState(false)
	const [isShowAgreePassword, setIsShowAgreePassword] = useState(false)

	const [oldPassword, setOldPassword] = useState('')

	const [isTwoFactorOpen, setIsTwoFactorOpen] = useState(false)
	const [newPassword, setNewPassword] = useState('')
	const [isShowNewPassword, setIsShowNewPassword] = useState(false)
	const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)

	const [step, setStep] = useState(1)

	const handleContinue = () => {
		setStep(step + 1)
	}

	const [confirmPassword, setConfirmPassword] = useState('')

	const handleChangePassword = async () => {
		try {
			if (!oldPassword || !newPassword || !confirmPassword) {
				toast.error('Заполните все поля')
				return
			}

			if (newPassword !== confirmPassword) {
				toast.error('Пароли не совпадают')
				return
			}
			toast.success('Пароль успешно изменён')
			setIsChangePasswordOpen(false)
		} catch (error: any) {
			console.error('Ошибка при смене пароля')
			toast.error('Произошла ошибка')
		}
	}

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

		const changedConfirm = () => {
			setIsChangePasswordOpen(false)
			toast.success('Пароль изменен')
		}

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
									<div className='flex items-center justify-center gap-x-2 mb-4 relative'>
										{step === 2 && (
											<div className='absolute -top-2.5 -left-3'>
												<ArrowBigLeft
													className='cursor-pointer hover:text-primary-pink transition-colors duration-300'
													size={25}
													onClick={() => setStep(1)}
												/>
											</div>
										)}
										<div
											className={`border-white/[0.2] h-1 w-12 rounded-lg ${
												step === 1 ? 'bg-white animate-pulse' : 'bg-neutral-700'
											}`}
										></div>
										<div
											className={`border-white/[0.2] h-1 w-12 rounded-lg  ${
												step === 2 ? 'bg-white animate-pulse' : 'bg-neutral-700'
											}`}
										></div>
									</div>

									{step === 1 && (
										<div className='p-4'>
											<div
												className='flex items-center justify-center w-full'
												onClick={handleContinue}
											>
												<FloatingDock
													mobileClassName=''
													items={links}
												/>
											</div>
										</div>
									)}

									{step === 2 && (
										<div className='p-4'>
											<div className='flex items-center justify-center w-full'></div>
										</div>
									)}
								</div>
							</Modal>
						)}
					</div>

					{/* <div className='flex items-center justify-between border-b border-b-white/[0.2] pb-5'>
						<h2 className='text-xs sm:text-base md:text-lg whitespace-nowrap'>
							Почта
						</h2>
						<Button
							variant={'outline'}
							className='text-base md:text-lg whitespace-nowrap w-max px-4 py-1.5'
						>
							Изменить
						</Button>
					</div> */}

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
											className='bg-transparent outline-none truncate'
											placeholder='Старый пароль'
											type={isShowPastPassword ? 'text' : 'password'}
											value={oldPassword}
											onChange={(e) => setOldPassword(e.target.value)}
										/>
										<div
											className={styles.icon}
											onClick={() => setIsShowPastPassword(!isShowPastPassword)}
										>
											{isShowPastPassword ? <Eye /> : <EyeOff />}
										</div>
									</label>
									<label className={cn(styles.field, 'mb-2 mt-6')}>
										<div className={styles.icon}>
											<KeyRound />
										</div>
										<input
											className='bg-transparent outline-none truncate'
											placeholder='Новый пароль'
											type={isShowNewPassword ? 'text' : 'password'}
											value={newPassword}
											onChange={(e) => setNewPassword(e.target.value)}
										/>
										<div
											className={styles.icon}
											onClick={() => setIsShowNewPassword(!isShowNewPassword)}
										>
											{isShowNewPassword ? <Eye /> : <EyeOff />}
										</div>
									</label>
									<label className={cn(styles.field, 'mb-2 mt-6')}>
										<div className={styles.icon}>
											<Check />
										</div>
										<input
											className='bg-transparent outline-none truncate'
											placeholder='Введи новый пароль повторно'
											type={isShowAgreePassword ? 'text' : 'password'}
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
										/>
										<div
											className={styles.icon}
											onClick={() =>
												setIsShowAgreePassword(!isShowAgreePassword)
											}
										>
											{isShowAgreePassword ? <Eye /> : <EyeOff />}
										</div>
									</label>
									<Button onClick={handleChangePassword} disabled={isLoading} className='text-center mt-6'>
										{isLoading ? (
											<Loader2 className='animate-spin' />
										) : (
											'Подтвердить'
										)}
									</Button>
								</div>
							</Modal>
						)}
					</div>

				<Logout />
				</div>
			</div>
		</div>
	)
}

export default Safety