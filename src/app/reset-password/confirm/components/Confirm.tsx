'use client'

import { slideInFromLeft } from '@/utils/motion'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import styles from '@/components/ui/field/Field.module.scss'
import { Check, CircleUser, Eye, EyeOff, KeyRound, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

export default function Confirm() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isShowNewPassword, setIsShowNewPassword] = useState(false)
  const [isShowAgreePassword, setIsShowAgreePassword] = useState(false)
	const [isButtonClicked, setIsButtonClicked] = useState(false)
	const [buttonKey, setButtonKey] = useState(0)

	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { mutate: confirm } = useMutation({
		mutationKey: ['confirm-reset-password'],
		mutationFn: ({password, token}: { password: string, token: string }) => authService.resetPasswordConfirm(password, token),
		onSuccess: () => {
			toast.success('Пароль восстановлен')
			reset()
		},
		onError: (error: any) => {
			toast.error('Ошибка восстановления пароля')
			console.log(error)
		}
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onChange',
	})

	const onSubmit = (data: any) => {
		if (!token) {
			toast.error('Токен отсутствует')
			return
		}
		confirm({ password: data.password, token })
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.div initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.2)}
					className='flex items-center justify-center h-screen isolate z-[10] relative px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
				>
					<div className='flex flex-row gap-36'>
						<div className='flex items-center justify-center'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className='relative rounded-xl bg-main-black border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 sm:p-9 md:p-10 w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px]'
							>
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 Welcome-text'>
									Восстановление пароля
								</h2>
								<label className={cn(styles.field, 'mb-2 mt-6')}>
									<div className={styles.icon}>
										<KeyRound />
									</div>
									<input
										className='bg-transparent outline-none truncate'
										placeholder='Новый пароль'
										type={isShowNewPassword ? 'text' : 'password'}
										{...register('password', {
											required: true,
											validate: {
												minLength: value =>
													value.length >= 8 ||
													'Пароль должен содержать минимум 8 символов',
												maxLength: value =>
													value.length <= 128 ||
													'Пароль должен содержать максимум 128 символов',
												// hasUpperCase: value =>
												// 	/[A-Z]/.test(value) ||
												// 	'Пароль должен содержать хотя бы одну заглавную букву',
												hasLowerCase: value =>
													/[a-z]/.test(value) ||
													'Пароль должен содержать хотя бы одну строчную букву',
												hasNumber: value =>
													/[0-9]/.test(value) ||
													'Пароль должен содержать хотя бы одну цифру',
											},
										})}
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
										{...register('new-password', {
											required: true,
											validate: {
												minLength: value =>
													value.length >= 8 ||
													'Пароль должен содержать минимум 8 символов',
												maxLength: value =>
													value.length <= 128 ||
													'Пароль должен содержать максимум 128 символов',
												// hasUpperCase: value =>
												// 	/[A-Z]/.test(value) ||
												// 	'Пароль должен содержать хотя бы одну заглавную букву',
												hasLowerCase: value =>
													/[a-z]/.test(value) ||
													'Пароль должен содержать хотя бы одну строчную букву',
												hasNumber: value =>
													/[0-9]/.test(value) ||
													'Пароль должен содержать хотя бы одну цифру',
											},
										})}
									/>
									<div
										className={styles.icon}
										onClick={() => setIsShowAgreePassword(!isShowAgreePassword)}
									>
										{isShowAgreePassword ? <Eye /> : <EyeOff />}
									</div>
								</label>
								<div className='mb-3 mt-8 text-center'>
									<button
										type='submit'
										// key={buttonKey}
										className={
											isButtonClicked && (errors.identifier || errors.password)
												? styles.buttonError
												: styles.form_btn
										}
									>
										ПОДТВЕРДИТЬ
									</button>
								</div>
							</form>
						</div>
					</div>
				</m.div>
			</m.div>
		</LazyMotion>
	)

}