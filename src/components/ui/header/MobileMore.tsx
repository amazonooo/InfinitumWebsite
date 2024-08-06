'use client'

import { ArrowRight, User } from 'lucide-react'
import Link from 'next/link'

const MobileMore = () => {
  return (
		<div className='z-[40]'>
			<div className='p-8 flex flex-col'>
				<div className='flex justify-between items-center mb-24'>
					<h1 className='Welcome-text text-2xl'>Infinitum</h1>
					<Link href={'/login'}>
						<User />
					</Link>
				</div>
				<div className='grid grid-cols-3 gap-12'>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Контакты
							</p>
							<ArrowRight
								className='-ml-4 opacity-0 group-hover:ml-1 group-hover:opacity-100 transition-all duration-450'
								size={16}
							/>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Правила
							</p>
							<ArrowRight
								className='-ml-4 opacity-0 group-hover:ml-1 group-hover:opacity-100 transition-all duration-450'
								size={16}
							/>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Бонусы
							</p>
							<ArrowRight
								className='-ml-4 opacity-0 group-hover:ml-1 group-hover:opacity-100 transition-all duration-450'
								size={16}
							/>
						</div>
					</div>
					<div className='border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] py-4 px-6 rounded-lg cursor-pointer group hover:shadow-3xl hover:shadow-[#cbacf9]/10 transition-colors duration-300'>
						<div className='flex items-center'>
							<p className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Банлист
							</p>
							<ArrowRight
								className='-ml-4 opacity-0 group-hover:ml-1 group-hover:opacity-100 transition-all duration-450'
								size={16}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileMore