'use client'

import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { PROJECT_NAME } from '@/constants/api.constants'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import styles from '../field/Field.module.scss'
import { cn } from '@/lib/utils'
import { Eye, EyeOff, KeyRound, Mail, Pickaxe } from 'lucide-react'
import Link from 'next/link'
import { Checkbox } from '../checkbox'

export default function Register() {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [buttonKey, setButtonKey] = useState(0)
	const [isChecked, setIsChecked] = useState(false)

  const router = useRouter()

  const { mutate: registerMode } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IAuthForm) => authService.register(data),
    onSuccess: () => {
      router.replace('/profile'),
      toast.success('Успешная регистрация')
    },
    onError: (error) => {
      console.log('Ошибка регистрации: ', error)
      toast.error('Ошибка регистрации')
    }
  })

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IAuthForm>({
		mode: 'onChange',
	})

  const handleButtonClick = () => {
    setIsButtonClicked(true)

    if (errors.email || errors.username || errors.password) {
      setButtonKey((prevKey) => prevKey + 1)
      toast.error('Пожалуйста, заполните все поля')
    }
  }

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    registerMode(data)
    reset()
  }

  return (
		<LazyMotion features={domAnimation}>
			<m.div initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.2)}
					className='absolute top-12 xl:left-16 invisible xl:visible xl:-translate-x-0 z-[20]'
				>
					<h1 className='Welcome-text font-bold text-2xl Welcome-box items-center px-3 py-1.5'>
						{PROJECT_NAME}
					</h1>
				</m.div>
				<m.div
					variants={slideInFromRight(0.2)}
					className='flex items-center justify-center h-screen isolate z-[10] relative px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
				>
					<div className='flex flex-row gap-36'>
						<div className='flex items-center justify-center'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className='relative rounded-xl bg-main-black border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 sm:p-9 md:p-10 w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px]'
							>
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 Welcome-text'>
									Создать аккаунт
								</h2>
								<label className={cn(styles.field, 'mb-2')}>
									<div className={styles.icon}>
										<Pickaxe />
									</div>
									<input
										className='bg-transparent outline-none'
										placeholder='Ник'
										type='text'
										{...register('username', {
											required: true,
											validate: {
												minLength: value =>
													value.length >= 4 ||
													'Имя пользователя должно состоять минимум из 4 символов',
												maxLength: value =>
													value.length <= 16 ||
													'Имя пользователя должно содержать не более 16 символов',
											},
											// pattern: {
											// 	value: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$&]{8,}$/,
											// 	message:
											// 		'Пароль должен содержать минимум одну букву, одну цифру и быть длиной не менее 8 символов',
											// },

											// validate: async (username: string) => {
											// 	const response =
											// 		await authService.checkUsernameAvailability(username)
											// 	if (!response) {
											// 		return 'Ник уже используется'
											// 	}
											// },
										})}
									/>
								</label>
								{errors.username && (
									<p className='text-red-500 text-sm mb-1'>
										{errors.username.message}
									</p>
								)}
								<label className={cn(styles.field, 'mt-6 mb-2')}>
									<div className={styles.icon}>
										<Mail />
									</div>
									<input
										className='bg-transparent outline-none'
										type='email'
										placeholder='Почта'
										{...register('email', {
											required: true,
											pattern:
												/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
											// validate: async (email: string) => {
											// 	const response =
											// 		await authService.checkEmailAvailability(email)
											// 	if (!response) {
											// 		return 'Почта уже используется'
											// 	}
											// },
										})}
									/>
								</label>
								<label className={cn(styles.field, 'mt-6 mb-2')}>
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
										onClick={() => setIsShowPassword(!isShowPassword)}
									>
										{isShowPassword ? <Eye /> : <EyeOff />}
									</div>
								</label>
								{errors.password && (
									<p className='text-red-500 text-sm mb-1'>
										{errors.password.message}
									</p>
								)}
								<div className='mt-5 flex gap-x-3'>
									<Checkbox
										checked={isChecked}
										onCheckedChange={(checked: any) => setIsChecked(checked)}
										id='agreeement'
									/>
									<label
										htmlFor='agreeement'
										className='text-sm font-medium leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
									>
										Я согласен(-на) с положениями{' '}
										<span className='text-primary-pink cursor-pointer hover:underline hover:underline-offset-2'>
											Пользовательского соглашения
										</span>
										,{' '}
										<span className='text-primary-pink cursor-pointer hover:underline hover:underline-offset-2'>
											Политикой конфиденциальности
										</span>{' '}
										и{' '}
										<span className='text-primary-pink cursor-pointer hover:underline hover:underline-offset-2'>
											правилами проекта
										</span>
									</label>
								</div>
								<div className='mb-3 mt-8 text-center'>
									<button
										type='submit'
										key={buttonKey}
										onClick={handleButtonClick}
										disabled={!isChecked}
										className={cn(
											{
												[styles.buttonError]:
													isButtonClicked &&
													(errors.email || errors.username || errors.password),
												[styles.form_btn]: !(
													isButtonClicked &&
													(errors.email || errors.username || errors.password)
												),
											},
											'disabled:opacity-60 disabled:cursor-default disabled:scale-100'
										)}
									>
										СОЗДАТЬ АККАУНТ
									</button>
								</div>
								<div className='flex items-center gap-x-1.5 justify-center mt-4'>
									<h2 className=''>Уже есть аккаунт?</h2>
									<Link
										className='text-primary-pink hover:text-white transition-colors duration-300'
										href={'/login'}
									>
										Войти
									</Link>
								</div>
							</form>
						</div>
					</div>
				</m.div>
			</m.div>
		</LazyMotion>
	)
}