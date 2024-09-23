'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProfileLinks() {
	const pathname = usePathname()

	const [selectedIndex, setSelectedIndex] = useState(0)
	const links = [
		{
			name: 'Аккаунт',
			link: '/profile',
		},
		{
			name: 'Статистика',
			link: '/profile/statistics',
		},
	]

	useEffect(() => {
		const currentIndex = links.findIndex((link) => link.link === pathname)
		setSelectedIndex(currentIndex !== -1 ? currentIndex : 0)
	}, [pathname])

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
									className={`pb-2 text-3xl sm:text-4xl md:text-5xl font-semibold relative ${
										selectedIndex === index ? 'text-white' : 'text-neutral-600'
									}`}
									onClick={() => setSelectedIndex(index)}
								>
									{link.name}
								</Link>
							))}
						</div>

						<div className='w-full h-1.5 bg-neutral-700 relative mt-1 rounded-md'>
							<div
								className={`absolute h-1.5 bg-[rgb(229,156,255)] bg-[linear-gradient(90deg,_rgba(229,156,255,1)_0%,_rgba(186,156,255,1)_50%,_rgba(156,178,255,1)_100%)] transition-all duration-300 rounded-md ${
									selectedIndex === 0 ? 'left-0 w-[38%]' : 'left-1/2 w-1/2'
								}`}
							/>
						</div>
					</div>
				</m.div>
			</m.div>
		</LazyMotion>
	)
}