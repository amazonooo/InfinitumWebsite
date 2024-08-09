'use client'

import { FC, useState } from 'react'
import { comand } from './comand'
import SelectServer from '@/components/ui/select/SelectServer'

const MorePossib: FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
		<div className='w-full p-3 rounded-lg border border-[#cbacf9]/70 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
			<h1 className='text-center text-lg md:text-xl'>
				Покупка дополнительный возможностей
			</h1>
			<div className='mt-7'>
				<div className='grid xl:grid-cols-3 grid-cols-2 gap-4'>
					{comand.map(item => (
						<div
							key={item.id}
							className={`rounded-lg border border-white/50 hover:border-[#cbacf9]/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] cursor-pointer`}
						>
							<div className='p-2 text-center'>
								<h1 className='font-semibold'>{item.name}</h1>
								<p className='text-sm'>{item.desc}</p>
							</div>
						</div>
					))}
				</div>

				<div className='mt-7 flex items-center justify-center'>
					<SelectServer />
				</div>
			</div>
		</div>
	)
}

export default MorePossib