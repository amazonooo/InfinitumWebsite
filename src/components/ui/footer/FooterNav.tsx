'use client'

import Link from 'next/link'
import { FC } from 'react'
import { FaDiscord, FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import { FloatingDock } from '../floating-dock'
import { links } from '../user/safety/Safety'

const FooterNav: FC = () => {
	return (
		<nav className='flex flex-col z-[10]'>
			<div className='md:flex w-full md:justify-between grid grid-cols-1'>
				<div className='flex flex-col gap-y-2 md:gap-y-[70px] mb-10 md:mb-0'>
					<span className='uppercase Welcome-text font-bold text-xl md:text-2xl'>
						Infinitum
					</span>{' '}
					<span className='text-zinc-200 text-sm md:text-base hidden md:block'>
						Copyright © 2024. Все права защищены
					</span>
				</div>
				<div className='flex flex-col gap-y-2 mb-10 md:mb-0'>
					<h2 className='text-zinc-200 text-base md:text-lg'>
						Полезная информация
					</h2>
					<ul className='flex flex-col gap-y-2'>
						<li className='text-zinc-400 hover:text-primary-pink transition-colors duration-300'>
							<Link href={'/download'}>Установить лаунчер</Link>
						</li>
						<li className='text-zinc-400 hover:text-primary-pink transition-colors duration-300'>
							<Link href={'/servers'}>Серверы</Link>
						</li>
						<li className='text-zinc-400 hover:text-primary-pink transition-colors duration-300'>
							<Link href={'/rules'}>Правила</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-y-2'>
					<h2 className='text-zinc-200 text-base md:text-lg'>
						Для пользователей
					</h2>
					<ul className='flex flex-col gap-y-2'>
						<li className='text-zinc-400 hover:text-primary-pink transition-colors duration-300'>
							<Link href={'/'}>Публичная оферта</Link>
						</li>
						<li className='text-zinc-400 hover:text-primary-pink transition-colors duration-300'>
							<Link href={'/'}>Политика конфиденциальности</Link>
						</li>
						<li className='text-zinc-400 hover:text-primary-pink transition-colors duration-300'>
							<Link href={'/'}>Наша команда</Link>
						</li>
					</ul>
				</div>
			</div>
			<h2 className='mt-12 block md:hidden text-zinc-200 text-sm md:text-base '>
				Copyright © 2024. Все права защищены
			</h2>
			<div className='w-full flex items-center justify-center'>
				<div className='flex w-fit mt-10 items-center justify-center'>
					{/* <div>
						<FaDiscord
							className='text-zinc-400 hover:text-zinc-200 transition-colors duration-300 cursor-pointer'
							size={30}
						/>
					</div>
					<div>
						<FaTelegramPlane
							className='text-zinc-400 hover:text-zinc-200 transition-colors duration-300 cursor-pointer'
							size={30}
						/>
					</div> */}
					<FloatingDock mobileClassName='' items={links} />
				</div>
			</div>
		</nav>
	)
}

export default FooterNav
