'use client'

import { slideInFromLeft } from '@/utils/motion'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import styles from '@/components/ui/field/Field.module.scss'
import { CircleUser, KeyRound, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { toast } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import Link from 'next/link'
import { PROJECT_NAME } from '@/constants/api.constants'

interface IRecovery {
	email: string
}

export default function Recovery() {
	const [emailError, setEmailError] = useState('')
	const [isButtonClicked, setIsButtonClicked] = useState(false)
	const [buttonKey, setButtonKey] = useState(0)

	const { mutate: resetPassword } = useMutation({
		mutationKey: ['reset-password'],
		mutationFn: (email: any) => authService.resetPasswordRequest(email),
		onSuccess: () => {
			toast.success('Запрос на сброс пароля отправлен')
			reset()
		},
		onError: (error: any) => {
			const errorMessage = error?.response?.data?.message || toast.error('Ошибка сброса пароля')
			toast.error(errorMessage)
			console.log(error)
		}
	})

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm<IRecovery>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IRecovery> = (data) => {
		resetPassword(data)
	}

	const handleButtonClick = () => {
		setEmailError('')
		setIsButtonClicked(true)

		if(errors.email) {
			setButtonKey(prevKey => prevKey + 1)
			toast.error('Пожалуйста, заполните поле')
		}
		if (emailError) {
			toast.error('Пользователь с таким email не найден')
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
					className='flex items-center justify-center h-screen isolate z-[10] relative px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
				>
					<div className='flex flex-row gap-36'>
						<div className='flex items-center justify-center'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className='relative rounded-xl bg-main-black border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 sm:p-9 md:p-10 w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px]'
							>
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 Welcome-text'>
									Сброс пароля
								</h2>
								<label className={cn(styles.field, '')}>
									<div className={styles.icon}>
										<Mail />
									</div>
									<input
										className='bg-transparent outline-none'
										placeholder='Почта'
										type='text'
										{...register('email', {
											required: true,
											validate: {
												hasAtSymbol: value =>
													/@/.test(value) ||
													'Адрес электронной почты должен содержать символ "@"',
												isValidEmailFormat: value =>
													/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(
														value
													) ||
													'Адрес электронной почты должен быть в корректном формате',
											},
										})}
									/>
								</label>
								{emailError ? (
									<p className='text-red-500 text-sm mb-1'>{emailError}</p>
								) : (
									errors.email && (
										<p className='text-red-500 text-sm mb-1'>
											{errors.email.message}
										</p>
									)
								)}
								<div className='mb-3 mt-8 text-center'>
									<button
										type='submit'
										disabled={!isValid}
										onClick={handleButtonClick}
										key={buttonKey}
										className={cn(
											{
												[styles.buttonError]: isButtonClicked && errors.email,
												[styles.form_btn]: !(isButtonClicked && errors.email),
											},
											'disabled:opacity-60 disabled:cursor-default disabled:scale-100'
										)}
									>
										СБРОСИТЬ ПАРОЛЬ
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