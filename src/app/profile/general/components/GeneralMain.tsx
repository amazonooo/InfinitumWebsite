'use client'

import { slideInFromLeft } from '@/utils/motion'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import PlayerInfo from './PlayerInfo'
import { Button } from '@/components/ui/button'
import Transactions from './Transactions'

export default function GeneralMain() {
	return (
		<LazyMotion features={domAnimation}>
			<m.section initial='hidden' animate='visible'>
				<m.div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					<m.div className='col-span-1'>
						<PlayerInfo />

						<div className='bg-main-black border border-white/[0.2] rounded-lg mt-20 max-w-[440px]'>
							<div className='p-6 text-center'>
								<h2 className='Welcome-text text-lg md:text-xl lg:text-2xl mb-4'>
									Текущий баланс
								</h2>
								<h1 className='text-3xl md:text-4xl lg:text-5xl mb-10'>
									219 308
								</h1>
								<Button>Пополнить</Button>
							</div>
						</div>

						<div className='bg-main-black border border-white/[0.2] rounded-lg mt-20 max-w-[440px]'>
							<div className='p-6'>
								<h2 className='text-center text-lg md:text-xl lg:text-2xl mb-4'>
									Текущий сервер
								</h2>
								<h1 className='text-center Welcome-text text-3xl md:text-4xl lg:text-5xl mb-10'>
									Fluddality
								</h1>
								<div className='flex items-center justify-between'>
									<h2 className='text-base md:text-lg'>игровое время:</h2>
									<p className='text-base md:text-lg Welcome-text'>3 часа</p>
								</div>
								<div className='flex items-center justify-between'>
									<h2 className='text-base md:text-lg'>убийства</h2>
									<p className='text-base md:text-lg Welcome-text'>124</p>
								</div>
								<div className='flex items-center justify-between'>
									<h2 className='text-base md:text-lg'>твои смерти:</h2>
									<p className='text-base md:text-lg Welcome-text'>12 096</p>
								</div>
								<div className='flex items-center justify-between'>
									<h2 className='text-base md:text-lg Welcome-text'>
										убитые мобы:
									</h2>
									<p className='text-base md:text-lg'>507</p>
								</div>
								<div className='flex items-center justify-between'>
									<h2 className='text-base md:text-lg Welcome-text'>
										сломанные блоки:
									</h2>
									<p className='text-base md:text-lg'>209 529</p>
								</div>
								<div className='flex items-center justify-between'>
									<h2 className='text-base md:text-lg Welcome-text'>
										твои блоки:
									</h2>
									<p className='text-base md:text-lg'>12 209 529</p>
								</div>
								<div className='flex items-center justify-between'>
									<h2 className='text-base md:text-lg Welcome-text'>
										сообщения в чате:
									</h2>
									<p className='text-base md:text-lg'>406</p>
								</div>
							</div>
						</div>
					</m.div>

					<m.div className='col-span-1 lg:col-span-2'>
						<div className='bg-main-black border border-white/[0.2] rounded-lg'>
							<div className='py-6 px-12'>
								<h1 className='Welcome-text text-3xl md:text-4xl lg:text-5xl text-center mb-10'>
									История пополнений
								</h1>
								<ul className='px-6 flex items-center justify-between mb-6'>
									<li>Дата и время</li>
									<li>Способ пополнения</li>
									<li>Внесено</li>
								</ul>
								<Transactions />
							</div>
						</div>
					</m.div>
				</m.div>
			</m.section>
		</LazyMotion>
	)
}