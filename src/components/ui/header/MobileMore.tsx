'use client'

import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
import { PROJECT_NAME } from '@/constants/api.constants'

interface IMobileMore {
	closeMenu: () => void
}

const MobileMore: FC<IMobileMore> = ({ closeMenu }) => {
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
		<div className='z-[10]'>
			<div className='p-7 flex flex-col'>
				<div className='flex justify-between items-center mb-16'>
					<h1
						onClick={closeMenu}
						className='Welcome-text text-2xl'
					>
						{PROJECT_NAME}
					</h1>
					<Dropdown closeMenu={closeMenu} />
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 md:gap-x-10 gap-y-12'>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<Link
								href={'/'}
								className='group-hover:text-[#cbacf9] transition-all duration-450 w-full'
							>
								Контакты
							</Link>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<Link
								onClick={closeMenu}
								href={'/rules'}
								className='group-hover:text-[#cbacf9] transition-all duration-450 w-full'
							>
								Правила
							</Link>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<Link
								href={'/'}
								className='group-hover:text-[#cbacf9] transition-all duration-450 w-full'
							>
								Бонусы
							</Link>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<Link
								href={'/'}
								className='group-hover:text-[#cbacf9] transition-all duration-450 w-full'
							>
								Банлист
							</Link>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<Link
								onClick={closeMenu}
								href={'/download'}
								className='group-hover:text-[#cbacf9] transition-all duration-450 w-full'
							>
								Помощь
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileMore