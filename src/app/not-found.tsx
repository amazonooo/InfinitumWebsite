'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	const handleClick = () => {
		router.push('/')
	}

	return (
		<div className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<h1 className='text-5xl Welcome-text Welcome-box p-4'>ОШИБКА 404</h1>
				<button onClick={handleClick}>Вернуться на главную страницу</button>
			</div>
		</div>
	)
}
