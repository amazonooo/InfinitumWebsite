'use client'

import Statistics from '@/components/ui/user/statistics/Statistics'
import UserInfo from '@/components/ui/user/UserInfo'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function ProfileLinks() {
	const [activeTab, setActiveTab] = useState<
		'Аккаунт' | 'Статистика' | 'Привилегии'
	>('Статистика')
	const [indicatorStyle, setIndicatorStyle] = useState<{
		width: number
		left: number
	}>({ width: 0, left: 0 })
	const tabs = ['Статистика', 'Привилегии', 'Аккаунт'] as const
	const navRef = useRef<HTMLDivElement>(null)

	const renderContent = () => {
		switch (activeTab) {
			case 'Статистика':
				return <Statistics />
			case 'Привилегии':
				return <div>Привилегии</div>
			case 'Аккаунт':
				return <UserInfo />
			default:
				return <Statistics />
		}
	}

	useEffect(() => {
		if (navRef.current) {
			const activeButton = navRef.current.querySelector<HTMLButtonElement>(
				`button[data-tab="${activeTab}"]`
			)
			if (activeButton) {
				const rect = activeButton.getBoundingClientRect()
				const navRect = navRef.current.getBoundingClientRect()
				setIndicatorStyle({
					width: rect.width,
					left: rect.left - navRect.left,
				})
			}
		}
	}, [activeTab])

	return (
		<LazyMotion features={domAnimation}>
			<m.div className='flex w-full flex-col'>
				<div className='text-white'>
					<nav
						ref={navRef}
						className='relative flex lg:justify-around justify-between lg:px-0 px-3 bg-main-black border rounded-lg border-white/20'
					>
						{tabs.map(tab => (
							<button
								key={tab}
								data-tab={tab}
								onClick={() => setActiveTab(tab)}
								className={`relative lg:px-4 py-2 text-base lg:text-lg font-medium transition ${
									activeTab === tab ? 'text-zinc-20' : 'text-zinc-400'
								}`}
							>
								{tab}
							</button>
						))}
						<m.div
							className='absolute bottom-0 h-0.5 bg-primary-pink rounded'
							style={{
								width: `${indicatorStyle.width}px`,
								left: `${indicatorStyle.left}px`,
							}}
							animate={indicatorStyle}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						/>
					</nav>

					<section className='p-6 bg-main-black border border-white/20 rounded-lg mt-20'>
						{renderContent()}
					</section>
				</div>
			</m.div>
		</LazyMotion>
	)
}
