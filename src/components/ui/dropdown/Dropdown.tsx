'use client'

import { cn } from '@/utils/cn'
import { CircleUserRound, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { m } from 'framer-motion'
import { FaUserAstronaut } from 'react-icons/fa6'
import ExitFromAcc from '../user/exit-from-account/ExitFromAcc'
import { useAuth } from '@/hooks/useAuth'
import { useProfileData } from '@/hooks/useProfileData'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'

interface IDropdown {
	closeMenu?: () => void
}

export default function Dropdown({ closeMenu }: IDropdown) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

	const { isAuthenticated } = useAuth()

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

	const { userProfile } = useProfileData()

  return (
		<div
			ref={buttonRef}
			onClick={
				isAuthenticated ? () => setDropdownOpen(!dropdownOpen) : () => {}
			}
			className={cn(isAuthenticated ? 'relative items-center flex' : '')}
		>
			{isAuthenticated ? (
				userProfile?.user.avatarUrl ? (
					<img
						src={userProfile.user.avatarUrl}
						alt='User Avatar'
						className='w-8 h-8 rounded-full cursor-pointer'
					/>
				) : (
					<Avatar>
						<AvatarImage src='/default-avatar.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				)
			) : (
				<Link href={'/login'} className='Welcome-box px-3 py-2 group'>
					<span className='text-zinc-200 group-hover:text-primary-pink transition-colors duration-300'>
						ВОЙТИ
					</span>
				</Link>
			)}

			<m.div
				ref={dropdownRef}
				className={`absolute right-0 top-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[linear-gradient(130deg,#b2d8f1,#e7b4f6)] p-[1px] rounded-lg text-base w-52 transition-all opacity-0 duration-300 ${
					dropdownOpen ? 'top-[3.23rem] opacity-100' : ''
				}`}
			>
				<div
					className={`p-4 bg-main-black rounded-lg flex-col gap-y-4 ${
						dropdownOpen ? 'flex' : 'hidden'
					}`}
				>
					<Link
						href={isAuthenticated ? '/profile' : '/login'}
						onClick={closeMenu}
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
					<ExitFromAcc />
				</div>
			</m.div>
		</div>
	)
}