'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function Modal() {
  return (
		<LazyMotion features={domAnimation}>
			<div className='bg-[rgba(0,0,0,0.9)] w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[50]'>
				<m.div
					initial='hidden'
					animate='visible'
					transition={{ duration: 0.3 }}
          className='bg-main-black border border-white/[0.2]'
				>
          INFINITUM
        </m.div>
			</div>
		</LazyMotion>
	)
}