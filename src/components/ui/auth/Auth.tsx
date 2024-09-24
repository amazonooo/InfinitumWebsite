'use client'

import { CircleUser, Eye, EyeOff, KeyRound, Mail, Pickaxe } from 'lucide-react'
import { MainButton } from '../main-button/MainButton'
import Link from 'next/link'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import styles from '../field/Field.module.scss'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

interface IAuth {
  type?: 'Войти' | 'Создать аккаунт'
}

export function Auth({ type }: IAuth) {
	const [isShowPassword, setIsShowPassword] = useState(false)

	const handleClick = (link: string) => {
		const router = useRouter()
		return () => {
			router.replace(`/${link}`)
		}
	}

	const isDesktop = useMediaQuery({ minWidth: 951 })

  return (
		<LazyMotion features={domAnimation}>
			<m.div initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.6)}
					className='absolute top-12 xl:left-16 left-1/2 xl:-translate-x-0 -translate-x-1/2'
				>
					<h1 className='Welcome-text font-bold text-2xl'>Infinitum</h1>
				</m.div>
				<m.div
					variants={slideInFromTop}
					className='flex items-center justify-center h-screen isolate z-[50] relative px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
					style={{
						backdropFilter: 'blur(.5px)',
						transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
					}}
				>
					<div className='flex flex-row gap-36'>
						<div className='flex items-center justify-center'>
							<form className='relative rounded-xl bg-main-black border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 sm:p-9 md:p-10 w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px]'>
								{/* <h1 className='Welcome-text ml-auto mr-auto text-4xl text-center Welcome-box p-3 -top-[68px] sm:-top-[70px] lg:-top-[73px] absolute select-none'>
									Infinitum
								</h1> */}
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 Welcome-text'>
									{type}
								</h2>
								{type === 'Создать аккаунт' && (
									<label className={cn(styles.field, '')}>
										<div className={styles.icon}>
											<Pickaxe />
										</div>
										<input
											className='bg-transparent outline-none'
											placeholder='Ник'
											type='email'
										/>
									</label>
								)}
								<label className={cn(styles.field, 'mt-6')}>
									<div className={styles.icon}>
										<CircleUser />
									</div>
									<input
										className='bg-transparent outline-none'
										placeholder='Логин или email'
										type='email'
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
									/>
									<div
										className={styles.icon}
										onClick={() => setIsShowPassword(!isShowPassword)}
									>
										{isShowPassword ? <Eye /> : <EyeOff />}
									</div>
								</label>
								{type === 'Войти' ? (
									<Link
										className='text-white/60 hover:text-white transition-colors duration-300'
										href={'/'}
									>
										Забыл пароль?
									</Link>
								) : (
									''
								)}

								<div
									className='mb-3 mt-8 text-center'
									onClick={handleClick('account')}
								>
									<MainButton className='uppercase w-full py-2'>
										{type}
									</MainButton>
								</div>

								{type === 'Создать аккаунт' ? (
									<div className='flex items-center gap-x-1.5 justify-center mt-4'>
										<h2 className=''>Уже есть аккаунт?</h2>
										<Link
											className='text-[#cbacf9] hover:text-white transition-colors duration-300'
											href={'/login'}
										>
											Войти
										</Link>
									</div>
								) : (
									<div className='flex items-center gap-x-1.5 justify-center mt-4'>
										<h2 className=''>Нет аккаунта?</h2>
										<Link
											className='text-[#cbacf9] hover:text-white transition-colors duration-300'
											href={'/register'}
										>
											Регистрация
										</Link>
									</div>
								)}
							</form>
						</div>
						{isDesktop && (
							<div className=''>
								<Image src={'/auth.png'} alt='auth' width={680} height={730} />
							</div>
						)}
					</div>
				</m.div>
			</m.div>
		</LazyMotion>
	)
} 