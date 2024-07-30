'use client'

import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'

const More: FC = () => {
  return (
		<motion.div
			className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'
			style={{
				backdropFilter: 'blur(16px) saturate(180%)',
				backgroundColor: 'rgba(26, 26, 30, 1.6)',
				borderRadius: '12px',
				border: '1px solid rgba(255, 255, 255, 0.125)',
			}}
			initial={{ opacity: 0, y: 0 }}
			animate={{ opacity: 1, y: 55 }}
			transition={{ duration: 0.3 }}
		>
			<ul className='flex flex-col gap-y-4 p-4'>
				<li className='w-full h-full text-[14px]'>
					<Link
						className='relative dark:text-neutral-50 transition-colors duration-300 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
						href={'/'}
					>
						Помощь
					</Link>
				</li>
				<li className='w-full h-full text-[14px]'>
					<Link
						className='relative dark:text-neutral-50 transition-colors duration-300 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
						href={'/'}
					>
						Команда проекта
					</Link>
				</li>
				<li className='w-full h-full text-[14px]'>
					<Link
						className='relative dark:text-neutral-50 transition-colors duration-300 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
						href={'/'}
					>
						Банлист
					</Link>
				</li>
				<li className='w-full h-full text-[14px]'>
					<Link
						className='relative dark:text-neutral-50 transition-colors duration-300 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
						href={'/'}
					>
						Бонусы
					</Link>
				</li>
				<li className='w-full h-full text-[14px]'>
					<Link
						className='relative dark:text-neutral-50 transition-colors duration-300 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
						href={'/'}
					>
						Контакты
					</Link>
				</li>
			</ul>
		</motion.div>
	)
}

export default More