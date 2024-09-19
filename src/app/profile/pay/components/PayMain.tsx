'use client'

import { FC } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const PayMain: FC = () => {
  return (
		<LazyMotion features={domAnimation}>
			<m.section initial='hidden' animate='visible'>
				<m.div
					variants={slideInFromLeft(0.3)}
					className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'
				>
					<div className='p-6'>page</div>
				</m.div>
			</m.section>
		</LazyMotion>
	)
}

export default PayMain