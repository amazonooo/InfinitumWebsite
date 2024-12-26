'use client'

import { PROJECT_NAME } from '@/constants/api.constants'
import { cn } from '@/lib/utils'
import { authService } from '@/services/auth.service'
import { ILoginForm } from '@/types/auth.types'
import { ResponseError } from '@/types/error.types'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { useMutation } from '@tanstack/react-query'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from '../field/Field.module.scss'
import { CircleUser, Eye, EyeOff, KeyRound } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import owasp from '@/config/owaps.confit'

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [buttonKey, setButtonKey] = useState(0)

  const router = useRouter()

  const { mutate: login } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: ILoginForm) => authService.login(data),
    onSuccess: () => {
      router.replace('/profile')
      toast.success('Успешный вход')
    },
    onError: (error: ResponseError) => {
      toast.dismiss()
      if (error.status && error.status === 401) {
        toast.error('Указан неверный логин или пароль')
      } else {
        toast.error('Ошибка авторизации')
      }
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ILoginForm>({
    mode: 'onChange'
  })

  const handleButtonClick = () => {
    setIsButtonClicked(true)
    if (errors.identifier || errors.password) {
      setButtonKey((prevKey) => prevKey + 1)
      toast.error('Пожалуйста, заполните все поля')
    }
  }

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    if(!data.identifier) {
      data.identifier = ''
    }
    if(!data.password) {
      data.password = ''
    }
		const dataToSend: ILoginForm = {
			...data,
			type: data.identifier.includes('@') ? 'email' : 'username'
		}
    login(dataToSend)
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
									Войти
								</h2>
								<label className={cn(styles.field, '')}>
									<div className={styles.icon}>
										<CircleUser />
									</div>
									<input
										className='bg-transparent outline-none'
										placeholder='Ник или Email'
										type='text'
										{...register('identifier', {
											required: true,
											minLength: 4,
										})}
									/>
								</label>
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
								{errors.password && <div className='text-red-500 text-sm mb-1'>
									{errors.password.message}	
								</div>}
								<Link
									className='text-white/60 hover:text-white transition-colors duration-300'
									href={'/'}
								>
									Забыл пароль?
								</Link>
								<div className='mb-3 mt-8 text-center'>
									<button
										type='submit'
										key={buttonKey}
										onClick={handleButtonClick}
										className={
											isButtonClicked && (errors.identifier || errors.password)
												? styles.buttonError
												: styles.form_btn
										}
									>
										ВОЙТИ
									</button>
								</div>
								<div className='flex items-center gap-x-1.5 justify-center mt-4'>
									<h2 className=''>Нет аккаунта?</h2>
									<Link
										className='text-primary-pink hover:text-white transition-colors duration-300'
										href={'/register'}
									>
										Регистрация
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