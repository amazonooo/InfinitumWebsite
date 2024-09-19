'use client'

import { slideInFromLeft } from '@/utils/motion'
import { FC } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { DollarSign, Wallet } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const HistoryMain: FC = () => {
	const isDesktop = useMediaQuery({ minWidth: 1270 })

	return (
		<LazyMotion features={domAnimation}>
			<m.section initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.3)}
					className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'
				>
					<div
						className={`${
							isDesktop
								? 'absolute md:right-8 lg:right-10 xl:right-20 2xl:right-32 top-1/2 -translate-y-1/2'
								: 'hidden'
						}`}
					>
						<Wallet size={70} className='text-[#cbacf9]' />
					</div>
					<div className='p-6'>
						<div className='flex items-center gap-x-6 sm:gap-x-8 justify-start'>
							<div className='border border-whtie p-3 w-fit rounded-full'>
								<DollarSign size={50} />
							</div>
							<p className='text-base md:text-lg'>
								Платежные операции на Вашем аккаунте не проводились
							</p>
						</div>
					</div>
				</m.div>
			</m.section>
		</LazyMotion>
	)
}

export default HistoryMain
