'use client'

import Link from 'next/link'
import { FC } from 'react'
import { FaDiscord, FaTelegram } from 'react-icons/fa'

const FooterNav: FC = () => {
	return (
		<nav className='lg:flex lg:justify-between lg:items-center lg:flex-row px-5 lg:px-10'>
			<h1 className='Welcome-text font-bold text-3xl mb-8 lg:mb-0 lg:mr-52'>
				Infinitum
			</h1>
			<ul className='lg:flex grid grid-cols-2 sm:grid-cols-3 lg:flex-row gap-y-6 sm:text-base lg:text-lg font-normal lg:items-center lg:gap-x-8 lg:mr-auto'>
				<li>
					<Link
						className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer text-[14px] md:text-[16px]'
						href={'#news'}
					>
						Новости
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Сервера
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Донат
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Правила
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Помощь
					</Link>
				</li>
				<li>
					<Link
						className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer text-[14px] md:text-[16px]'
						href={'/'}
					>
						Команда проекта
					</Link>
				</li>
			</ul>
			<ul className='mt-8 lg:mt-0 flex gap-x-8'>
				<li className='transition-colors duration-300 cursor-pointer text-lg dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'>
					<FaTelegram />
				</li>
				<li className='transition-colors duration-300 cursor-pointer text-lg dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'>
					<FaDiscord />
				</li>
			</ul>
		</nav>
	)
}

export default FooterNav
