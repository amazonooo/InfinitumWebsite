'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ProfileLinks() {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const links = [
		{
			name: 'Аккаунт',
			link: '/profile',
		},
		{
			name: 'Статистика',
			link: '/profile',
		},
	]

	return (
		<LazyMotion features={domAnimation}>
			<m.div className='flex items-center flex-col'>
				<m.div className='mt-16 lg:mt-40'>
					<div className='relative w-full'>
						<div className='flex justify-between space-x-8 text-white'>
							{links.map((link, index) => (
								<Link
									href={link.link}
									key={index}
									className={`pb-2 relative ${
										selectedIndex === index ? 'text-white' : 'text-gray-500'
									}`}
									onClick={() => setSelectedIndex(index)}
								>
									{link.name}
								</Link>
							))}
						</div>

						<div className='w-full h-1 bg-neutral-700 relative mt-1 rounded-md'>
							<div
								className={`absolute h-1 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 rounded-md ${
									selectedIndex === 0 ? 'left-0 w-1/2' : 'left-1/2 w-1/2'
								}`}
							/>
						</div>
					</div>
				</m.div>
			</m.div>
		</LazyMotion>
	)
}