'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	const handleClick = () => {
		router.push('/')
	}

	return (
		<div className='h-screen w-screen flex flex-col overflow-x-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[10] w-full h-full'
			>
				<h1 className='text-6xl Welcome-text Welcome-box p-12 mb-5'>ОШИБКА 404</h1>
				<button onClick={handleClick} className='bg-[#09090B] border border-white/[0.2] px-8 py-3 rounded-lg hover:text-primary-pink transition-all duration-300'>Вернуться на главную страницу</button>
			</div>
		</div>
	)
}
