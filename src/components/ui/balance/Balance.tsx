'use client'

import { FC } from 'react'

const Balance: FC = () => {
  return (
		<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'>
			<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
				<h1 className='text-center Welcome-text text-3xl xl:text-4xl'>
					Ваш баланс
				</h1>
				<div className='flex flex-col gap-4 my-9'>

				</div>
			</div>
		</div>
	)
}

export default Balance