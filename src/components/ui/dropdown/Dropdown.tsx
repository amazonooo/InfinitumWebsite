'use client'

import { cn } from '@/utils/cn'
import { CircleUserRound, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { m } from 'framer-motion'

export default function Dropdown() {
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
		<div
			ref={buttonRef}
			onClick={() => setDropdownOpen(!dropdownOpen)}
			className={cn('relative items-center flex')}
		>
			<User
				className={`cursor-pointer select-none ${
					dropdownOpen ? 'text-[#cbacf9]' : 'text-neutral-50'
				}`}
			/>
			<m.div
				ref={dropdownRef}
				className={`absolute right-0 top-0 border border-primary-pink/30 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] rounded-lg text-base w-52 transition-all opacity-0 duration-300 ${
					dropdownOpen ? 'top-[3.23rem] opacity-100' : ''
				}`}
			>
				<div
					className={`p-4 flex-col gap-y-4 ${dropdownOpen ? 'flex' : 'hidden'}`}
				>
					<Link
						href={'/login'}
						className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 whitespace-nowrap group items-center'
					>
						<span className='relative transition-all duration-300 after:content-[""] after:absolute after:top-[105%] after:h-[1px] after:left-0 after:w-0 after:transition-all after:duration-300 after:bg-white group-hover:opacity-100 visible group-hover:after:w-[100%]'>
							Личный кабинет
						</span>
					</Link>
					<Link
						href={'/profile'}
						className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 whitespace-nowrap group items-center'
					>
						<CircleUserRound
							size={15}
							className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100'
						/>
						<span className='relative transition-all duration-300 after:content-[""] after:absolute after:top-[105%] after:h-[1px] after:left-0 after:w-0 after:transition-all after:duration-300 after:bg-white group-hover:opacity-100 visible group-hover:after:w-[100%] group-hover:ml-5'>
							Профиль
						</span>
					</Link>
					<Link
						href={'/'}
						className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 whitespace-nowrap group items-center'
					>
						<LogOut
							size={15}
							className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100'
						/>
						<span className='relative transition-all duration-300 after:content-[""] after:absolute after:top-[105%] after:h-[1px] after:left-0 after:w-0 after:transition-all after:duration-300 after:bg-white group-hover:opacity-100 visible group-hover:after:w-[100%] group-hover:ml-5'>
							Выйти
						</span>
					</Link>
				</div>
			</m.div>
		</div>
	)
}