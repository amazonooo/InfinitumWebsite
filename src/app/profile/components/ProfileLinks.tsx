'use client'

import Statistics from '@/components/ui/user/statistics/Statistics'
import UserInfo from '@/components/ui/user/UserInfo'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { useState } from 'react'

export default function ProfileLinks() {
	const [activeTab, setActiveTab] = useState<'Аккаунт' | 'Статистика' | 'Привилегии'>('Аккаунт')

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

	return (
		<LazyMotion features={domAnimation}>
			<m.div className='flex w-full flex-col'>
				<div className='text-white'>
					<nav className='flex justify-around bg-main-black border rounded-lg border-white/20 lg:py-4'>
						<button
							onClick={() => setActiveTab('Статистика')}
							className={`px-4 py-2 text-base lg:text-lg font-medium transition ${
								activeTab === 'Статистика'
									? 'text-zinc-20 lg:border-b lg:border-primary-pink'
									: 'text-zinc-400'
							}`}
						>
							Статистика
						</button>
						<button
							onClick={() => setActiveTab('Привилегии')}
							className={`px-4 py-2 text-base lg:text-lg font-medium transition ${
								activeTab === 'Привилегии'
									? 'text-zinc-20 lg:border-b lg:border-primary-pink'
									: 'text-zinc-400'
							}`}
						>
							Привилегии
						</button>
						<button
							onClick={() => setActiveTab('Аккаунт')}
							className={`px-4 py-2 text-base lg:text-lg font-medium transition ${
								activeTab === 'Аккаунт'
									? 'text-zinc-20 lg:border-b lg:border-primary-pink'
									: 'text-zinc-400'
							}`}
						>
							Аккаунт
						</button>
					</nav>

					<section className='p-6 bg-main-black border border-white/20 rounded-lg mt-20'>
						{renderContent()}
					</section>
				</div>
			</m.div>
		</LazyMotion>
	)
}