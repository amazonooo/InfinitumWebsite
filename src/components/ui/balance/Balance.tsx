'use client'

import { useProfileData } from '@/hooks/useProfileData'
import { Banknote } from 'lucide-react'
import { Suspense } from 'react'

export default function Balance() {
  const { userProfile } = useProfileData()

	const balance = userProfile?.stats[0].money || '0'

  return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'>
				<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8 flex items-center justify-center flex-col'>
					<h1 className='text-center Welcome-text text-3xl xl:text-4xl'>
						Ваш баланс
					</h1>
					<h2 className='Welcome-box text-2xl text-center px-8 py-2.5 mt-5'>
						{balance}
						<Banknote className='text-emerald-500 ml-3' size={27} />
					</h2>
				</div>
			</div>
		</Suspense>
	)
}