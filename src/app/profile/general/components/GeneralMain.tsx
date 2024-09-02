'use client'

import { FC } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { Gem } from 'lucide-react'
import { Button } from '@/components/ui/button/Button'
import Image from 'next/image'

const GeneralMain: FC = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.section initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.5)}
					className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'
				>
					<div className='p-6'>
						<h1 className='text-center text-2xl md:text-3xl'>
							Привет, <span className='text-[#cbacf9]'>player</span>
						</h1>
						<div className='flex justify-center items-center md:flex-row flex-col gap-8 mt-12'>
							<div className='rounded-lg border border-neutral-400 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
								<div className='p-5 text-center'>
									<div className='flex flex-col items-center'>
										<div className='mb-1 flex items-center justify-center gap-x-3'>
											<p className='text-3xl'>0</p>
											<Gem className='text-emerald-300' size={30} />
										</div>
										<p className='text-2xl mb-7'>Сейчас на балансе</p>
										<Button>Пополнить баланс</Button>
									</div>
								</div>
							</div>

							<div className='rounded-lg border border-neutral-400 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] min-h-[180px]'>
								<div className='p-5 text-center'>
									<div className='flex flex-col items-center'>
										<div className='flex gap-x-3 items-center justify-center mb-7'>
											<p className='text-2xl'>Ваша аватарка</p>
											<Image
												src={'/ava.jpg'}
												alt='ava'
												width={40}
												height={40}
												className='rounded-full'
											/>
										</div>
										<Button>Поменять аватарку</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</m.div>
			</m.section>
		</LazyMotion>
	)
}

export default GeneralMain