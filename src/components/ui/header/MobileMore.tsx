'use client'

import { cn } from '@/utils/cn'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const MobileMore = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const dropdownRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: any) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target) &&
			buttonRef.current &&
			!buttonRef.current.contains(event.target)
		) {
			setDropdownOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

  return (
		<div className='z-[40]'>
			<div className='p-7 flex flex-col'>
				<div className='flex justify-between items-center mb-24'>
					<h1 className='Welcome-text text-2xl'>Infinitum</h1>
					<div
						ref={buttonRef}
						onClick={() => setDropdownOpen(!dropdownOpen)}
						className={cn('relative flex items-center')}
					>
						<User
							className={`cursor-pointer ${
								dropdownOpen ? 'text-[#cbacf9]' : 'text-neutral-50'
							}`}
						/>
						<div
							ref={dropdownRef}
							className={`absolute right-0 top-[2.35rem] border border-[#cbacf9]/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] flex flex-col justify-between rounded-lg text-base w-52 opacity-0 transition-opacity duration-300 ${
								dropdownOpen ? 'opacity-100' : ''
							}`}
						>
							<div className='p-4 flex flex-col gap-y-4'>
								<Link
									href={'/register'}
									className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 cursor-pointer whitespace-nowrap group items-center'
								>
									<span className='relative transition-all duration-300'>
										Личный кабинет
									</span>
								</Link>
								<Link
									href={'/profile'}
									className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 cursor-pointer whitespace-nowrap group items-center'
								>
									<span className='relative transition-all duration-300'>
										Профиль
									</span>
								</Link>
								<Link
									href={'/'}
									className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 cursor-pointer whitespace-nowrap group items-center'
								>
									<LogOut
										size={15}
										className='absolute'
									/>
									<span className='relative transition-all duration-300 ml-5'>
										Выйти
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 md:gap-x-10 gap-y-12'>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Контакты
							</p>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Правила
							</p>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Бонусы
							</p>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Банлист
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileMore