'use client'

import Link from 'next/link'
import { FC } from 'react'
import { FaDiscord, FaTelegram } from 'react-icons/fa'

const FooterNav: FC = () => {
	return (
		<nav className='xl:flex xl:justify-between xl:items-center xl:flex-row px-5 xl:px-10'>
			<Link href={'/'} className='Welcome-text font-bold text-2xl xl:mb-0 xl:mr-52'>
				Infinitum
			</Link>
			<ul className='xl:flex grid grid-cols-2 sm:grid-cols-3 xl:flex-row gap-y-6 sm:text-base xl:text-xl font-normal xl:items-center xl:gap-x-8 xl:mr-auto mt-6 xl:mt-0'>
				<li>
					<Link
						className='transition-colors duration-300 hover:text-primary-pink cursor-pointer text-[14px] md:text-[16px]'
						href={'#news'}
					>
						Новости
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 hover:text-primary-pink cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Сервера
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 hover:text-primary-pink cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Донат
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 hover:text-primary-pink cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Правила
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 hover:text-primary-pink cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Помощь
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 hover:text-primary-pink cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Команда проекта
					</Link>
				</li>
			</ul>
			<ul className='mt-8 xl:mt-0 flex gap-x-8'>
				<li className='transition-colors duration-300 cursor-pointer text-xl '>
					<FaTelegram />
				</li>
				<li className='transition-colors duration-300 cursor-pointer text-xl '>
					<FaDiscord />
				</li>
			</ul>
		</nav>
	)
}

export default FooterNav
