'use client'

import { slideInFromLeft } from '@/utils/motion'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import PlayerInfo from './PlayerInfo'
import { Button } from '@/components/ui/button'
import Transactions from './Transactions'
import { Charts } from './Charts'
import PrivilegeMain from '../../privilege/components/PrivilegeMain'

export default function GeneralMain() {
	return (
		<LazyMotion features={domAnimation}>
			<m.section initial='hidden' animate='visible'>
				<m.div className='grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-y-20 lg:gap-x-10'>
					<m.div className='lg:col-span-1 flex items-center flex-col'>
						<PlayerInfo />

						<div className='bg-main-black border border-white/[0.2] rounded-lg mt-10 w-[310px] sm:w-[370px] md:w-[350px] lg:w-[440px]'>
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

						<div className='bg-main-black border border-white/[0.2] rounded-lg mt-10 w-[310px] sm:w-[370px] md:w-[350px] lg:w-[440px]'>
							<div className='p-6'>
								<h2 className='text-center text-lg md:text-xl lg:text-2xl mb-4'>
									Текущий сервер
								</h2>
								<h1 className='text-center Welcome-text text-3xl md:text-4xl lg:text-5xl mb-10'>
									Server 1
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

					<m.div className='col-span-1 sm:col-span-2'>
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

						<div className='bg-main-black border border-white/[0.2] rounded-lg my-10'>
							<div className='py-6 px-12'>
								<h1 className='Welcome-text text-3xl md:text-4xl lg:text-5xl text-center mb-10'>
									Входы в профиль
								</h1>
								<h2 className='ml-6 mb-3'>Дата и время</h2>
								<div className='flex flex-col gap-y-5'>
									<div className='p-4 border border-primary-pink/60 rounded-lg flex justify-between items-center relative'>
										<p>24.10.2024 – 11:02:57 </p>
									</div>
									<div className='p-4 border border-primary-pink/60 rounded-lg flex justify-between items-center relative'>
										<p>24.10.2024 – 11:02:57 </p>
									</div>
								</div>
							</div>
						</div>

						{/* <PrivilegeMain /> */}
					</m.div>
				</m.div>
			</m.section>
		</LazyMotion>
	)
}