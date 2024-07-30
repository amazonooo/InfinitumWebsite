'use client'

import Link from 'next/link'
import { FC } from 'react'
import { FaDiscord, FaTelegram } from 'react-icons/fa'

const FooterNav: FC = () => {
	return (
		<nav className='flex flex-col md:justify-between md:items-center md:flex-row px-10'>
			<h1 className='Welcome-text font-bold text-3xl mb-8 md:mb-0 md:mr-52'>
				Infinitum
			</h1>
			<ul className='flex flex-col md:flex-row gap-y-6 text-[14px] sm:text-base lg:text-lg md:text-[14px] font-normal md:items-center md:gap-x-8 md:mr-auto'>
				<li>
					<Link className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer' href={'#news'}>Новости</Link>
				</li>
				<li>
					<Link className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer' href={'/'}>Сервера</Link>
				</li>
				<li>
					<Link className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer' href={'/'}>Донат</Link>
				</li>
				<li>
					<Link className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer' href={'/'}>Правила</Link>
				</li>
				<li>
					<Link className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer' href={'/'}>Помощь</Link>
				</li>
				<li>
					<Link className='transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700 cursor-pointer' href={'/'}>Команда проекта</Link>
				</li>
			</ul>
			<ul className='mt-8 md:mt-0 flex gap-x-8'>
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
