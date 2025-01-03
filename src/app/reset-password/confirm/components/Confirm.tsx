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
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import zxcvbn from 'zxcvbn'
import Link from 'next/link'
import { PROJECT_NAME } from '@/constants/api.constants'

export interface IResetPasswordConfirmForm {
	password: string
	confirmPassword: string
}

interface IResetPasswordData {
	password: string
	token: string
}

export default function Confirm() {
	const [isShowPassword, setIsShowPassword] = useState(false)
	const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
	const [isButtonClicked, setIsButtonClicked] = useState(false)
	const [passwordStrengthError, setPasswordStrengthError] = useState('')

	const router = useRouter()

	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { mutate: confirm } = useMutation({
		mutationKey: ['confirm-reset-password'],
		mutationFn: ({ password, token }: IResetPasswordData) =>
			authService.resetPasswordConfirm(password, token),
		onSuccess: () => {
			toast.success('Пароль восстановлен')
			reset()
			router.push('/login')
		},
		onError: (error: any) => {
			toast.error('Ошибка восстановления пароля')
			console.log(error)
		},
	})

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		getValues,
		setValue,
		trigger,
		setError,
		clearErrors,
	} = useForm<IResetPasswordConfirmForm>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IResetPasswordConfirmForm> = data => {
		if (!token) {
			router.push('/reset-password')
			return toast.error('Срок действия ссылки восстановления пароля истёк')
		}
		const result = zxcvbn(data.password)
		if (result.score <= 1) {
			return setPasswordStrengthError('Пароль слишком простой')
		}
		confirm({ password: data.password, token })
	}

	const validatePasswords = async (
		e: React.ChangeEvent<HTMLInputElement>,
		type: 'password' | 'confirmPassword'
	) => {
		const value = e.target.value
		setValue(type, value)

		const password = getValues('password')
		const confirmPassword = getValues('confirmPassword')

		await trigger(type)
		if (!errors.password && confirmPassword && password !== confirmPassword) {
			setError('password', {
				type: 'manual',
				message: 'Пароли не совпадают',
			})
		} else if (confirmPassword && password === confirmPassword) {
			clearErrors('password')
			await trigger('password')
		} else {
			setPasswordStrengthError('')
			await trigger(type)
		}
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.div initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.2)}
					className='absolute top-12 xl:left-16 invisible xl:visible xl:-translate-x-0 z-[20]'
				>
					<Link href='/'>
						<h1 className='Welcome-text font-bold text-2xl Welcome-box items-center px-3 py-1.5'>
							{PROJECT_NAME}
						</h1>
					</Link>
				</m.div>
				<m.div
					variants={slideInFromLeft(0.2)}
					className='absolute top-12 xl:left-16 invisible xl:visible xl:-translate-x-0 z-[20]'
				>
					<Link href='/'>
						<h1 className='Welcome-text font-bold text-2xl Welcome-box items-center px-3 py-1.5'>
							{PROJECT_NAME}
						</h1>
					</Link>
				</m.div>
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
										className='bg-transparent outline-none'
										placeholder='Пароль'
										type={isShowPassword ? 'text' : 'password'}
										{...register('password', {
											required: true,
											validate: {
												minLength: value =>
													value.length >= 8 ||
													'Пароль должен содержать минимум 8 символов',
												maxLength: value =>
													value.length <= 128 ||
													'Пароль должен содержать максимум 128 символов',
												hasLowerCase: value =>
													/[a-z]/.test(value) ||
													'Пароль должен содержать хотя бы одну строчную букву',
												hasNumber: value =>
													/[0-9]/.test(value) ||
													'Пароль должен содержать хотя бы одну цифру',
											},
										})}
										onChange={e => validatePasswords(e, 'password')}
									/>
									<div
										className={styles.icon}
										onClick={() => setIsShowPassword(!isShowPassword)}
									>
										{isShowPassword ? <Eye /> : <EyeOff />}
									</div>
								</label>
								{errors.password ? (
									<p className='text-red-500 text-sm mb-1'>
										{errors.password.message}
									</p>
								) : (
									passwordStrengthError && (
										<p className='text-red-500 text-sm mb-1'>
											{passwordStrengthError}
										</p>
									)
								)}
								<label className={cn(styles.field, 'mb-2 mt-6')}>
									<div className={styles.icon}>
										<Check />
									</div>
									<input
										className='bg-transparent outline-none truncate'
										placeholder='Введи новый пароль повторно'
										type={isShowConfirmPassword ? 'text' : 'password'}
										{...register('confirmPassword', {
											required: true,
											// validate: {
											// 	minLength: value =>
											// 		value.length >= 8 ||
											// 		'Пароль должен содержать минимум 8 символов',
											// 	maxLength: value =>
											// 		value.length <= 128 ||
											// 		'Пароль должен содержать максимум 128 символов',
											// 	hasLowerCase: value =>
											// 		/[a-z]/.test(value) ||
											// 		'Пароль должен содержать хотя бы одну строчную букву',
											// 	hasNumber: value =>
											// 		/[0-9]/.test(value) ||
											// 		'Пароль должен содержать хотя бы одну цифру',
											// },
										})}
										onChange={e => validatePasswords(e, 'confirmPassword')}
									/>
									<div
										className={styles.icon}
										onClick={() =>
											setIsShowConfirmPassword(!isShowConfirmPassword)
										}
									>
										{isShowConfirmPassword ? <Eye /> : <EyeOff />}
									</div>
								</label>
								{errors.confirmPassword && (
									<p className='text-red-500 text-sm mb-1'>
										{errors.confirmPassword.message}
									</p>
								)}
								<div className='mb-3 mt-8 text-center'>
									<button
										type='submit'
										disabled={!isValid}
										className={cn(
											{
												[styles.buttonError]:
													isButtonClicked &&
													(errors.password || errors.confirmPassword),
												[styles.form_btn]: !(
													isButtonClicked &&
													(errors.password || errors.confirmPassword)
												),
											},
											'disabled:opacity-60 disabled:cursor-default disabled:scale-100'
										)}
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
