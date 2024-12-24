'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	const handleClick = () => {
		router.push('/')
	}

	return (
		<div className='h-screen w-screen flex flex-col overflow-x-clip'>
			<div className='flex flex-col items-center justify-center isolate z-[10] w-full h-full'>
				<h1 className='text-6xl Welcome-text Welcome-box p-12 items-center mb-5'>
					ОШИБКА 404
				</h1>
				<Button onClick={handleClick}>Вернуться на главную страницу</Button>
			</div>
		</div>
	)
}
