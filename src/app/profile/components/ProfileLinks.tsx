'use client'

import UserInfo from '@/components/ui/user/UserInfo'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { useState } from 'react'

export default function ProfileLinks() {
	const [activeTab, setActiveTab] = useState<'Аккаунт' | 'Статистика' | 'Привилегии'>('Аккаунт')

	const renderContent = () => {
		switch (activeTab) {
			case 'Аккаунт':
				return <UserInfo />
			case 'Статистика':
				return <div>Статистика</div>
			case 'Привилегии':
				return <div>Привилегии</div>
			default:
				return <div>Аккаунт</div>
		}
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.div className='flex w-full flex-col z-10'>
				<div className='text-white min-h-screen'>
					<nav className='flex justify-around bg-main-black border rounded-lg border-white/20 py-4'>
						<button
							onClick={() => setActiveTab('Аккаунт')}
							className={`px-4 py-2 text-lg font-medium transition ${
								activeTab === 'Аккаунт'
									? 'text-zinc-20 border-b border-primary-pink'
									: 'text-zinc-400'
							}`}
						>
							Аккаунт
						</button>
						<button
							onClick={() => setActiveTab('Статистика')}
							className={`px-4 py-2 text-lg font-medium transition ${
								activeTab === 'Статистика'
									? 'text-zinc-20 border-b border-primary-pink'
									: 'text-zinc-400'
							}`}
						>
							Статистика
						</button>
						<button
							onClick={() => setActiveTab('Привилегии')}
							className={`px-4 py-2 text-lg font-medium transition ${
								activeTab === 'Привилегии'
									? 'text-zinc-20 border-b border-primary-pink'
									: 'text-zinc-400'
							}`}
						>
							Привилегии
						</button>
					</nav>

					<section className='p-6 bg-main-black border border-white/20 rounded-lg mt-20'>{renderContent()}</section>
				</div>
			</m.div>
		</LazyMotion>
	)
}