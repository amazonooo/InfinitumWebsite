'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	const handleClick = () => {
		router.push('/')
	}

	return (
		<div className='h-screen w-screen'>
			<div className='w-full h-full flex-col gap-y-6 flex items-center justify-center'>
				<h1 className='text-5xl Welcome-text Welcome-box p-4'>ОШИБКА 404</h1>
				<button onClick={handleClick}>Вернуться на главную страницу</button>
			</div>
		</div>
	)
}
