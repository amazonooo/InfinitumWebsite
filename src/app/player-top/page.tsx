'use client'

import { Button } from '@/components/ui/button'
import { CodeXml } from 'lucide-react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'

// export const metadata: Metadata = {
// 	title: 'Топ игроков',
// }

export default function Page() {
  const router = useRouter()

	return (
		<section className='h-screen w-screen overflow-x-clip'>
			<div className='flex flex-col items-center justify-center isolate z-[10] w-full h-full Welcome-box'>
				<h1 className='text-4xl md:text-7xl Welcome-text font-semibold mb-10'>
					В разработке
				</h1>
        <Button onClick={() => router.push('/')}>Вернуться на главную</Button>
			</div>
		</section>
	)
}
