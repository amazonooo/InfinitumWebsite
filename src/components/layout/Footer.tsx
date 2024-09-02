'use client'

import { FC } from 'react'
import FooterNav from '../ui/footer/FooterNav'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'
import { usePathname } from 'next/navigation'

const Footer: FC = () => {
	const pathname = usePathname()
	const isLoggedLogin = pathname === '/login'
	const isLoggedRegister = pathname === '/register'

	if (isLoggedLogin) return null
	if (isLoggedRegister) return null

  return (
		<LazyMotion features={domAnimation}>
			<m.footer
				className='mx-5 xl:px-0 lg:mx-16 xl:mx-auto lg:max-w-7xl overflow-x-clip mt-16 lg:mb-6 mb-28 py-4 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'
				initial='hidden'
				animate='visible'
				style={{
					backdropFilter: 'blur(.5px)',
				}}
			>
				<m.div variants={slideInFromRight(0.8)}>
					<FooterNav />
				</m.div>
			</m.footer>
		</LazyMotion>
	)
}

export default Footer