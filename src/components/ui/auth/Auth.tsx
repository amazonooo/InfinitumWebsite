'use client'

import { Eye, EyeOff, Mail } from 'lucide-react'
import { Button } from '../button/Button'
import Link from 'next/link'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import styles from '../field/Field.module.scss'

interface IAuth {
  type?: 'Войти' | 'Регистрация'
}


export function Auth({ type }: IAuth) {
	const [isShowPassword, setIsShowPassword] = useState(false)

	const handleClick = (link: string) => {
		const router = useRouter()
		return () => {
			router.replace(`/${link}`)
		}
	}

  return (
		<LazyMotion features={domAnimation}>
			<m.div initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromTop}
					className='flex w-screen h-screen isolate z-[50] relative px-5 sm:px-10'
					style={{
						backdropFilter: 'blur(.5px)',
						transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
					}}
				>
					<form className='relative rounded-xl m-auto h-auto w-[450px] border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] p-8 sm:p-9 md:p-10'>
						<h1 className='Welcome-text ml-auto mr-auto text-4xl text-center Welcome-box p-3 -top-[68px] sm:-top-[70px] lg:-top-[73px] absolute select-none'>
							Infinitum
						</h1>
						<h2 className='text-3xl font-bold text-center mb-8'>{type}</h2>
						<div className='text-center'>
							{/* <Field
							placeholder='Email'
							type='email'
							Icon={Mail}
							className='mb-6'
						/>
						<Field
							placeholder='Password'
							type='password'
							Icon={KeyRound}
							className='mb-8'
						/> */}
							<label className={cn(styles.field, 'mt-9')}>
								<div className={styles.icon}>
									<Mail />
								</div>
								<input
									className='bg-transparent'
									placeholder='Email'
									type='email'
								/>
							</label>
							<label className={cn(styles.field, 'mb-8 mt-6')}>
								<div className={styles.icon}>
									<Mail />
								</div>
								<input
									className='bg-transparent'
									placeholder='Password'
									type={isShowPassword ? 'text' : 'password'}
								/>
								<div
									className={styles.icon}
									onClick={() => setIsShowPassword(!isShowPassword)}
								>
									{isShowPassword ? <Eye /> : <EyeOff />}
								</div>
							</label>

							<div className='mb-3' onClick={handleClick('account')}>
								<Button className='uppercase px-5 py-2'>{type}</Button>
							</div>
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

							{type === 'Регистрация' ? (
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
						</div>
						{/* <Meteors number={20} /> */}
					</form>
				</m.div>
			</m.div>
		</LazyMotion>
	)
} 