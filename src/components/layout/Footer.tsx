'use client'

import { FC } from 'react'
import FooterNav from '../ui/footer/FooterNav'
import { usePathname } from 'next/navigation'

const Footer: FC = () => {
	const pathname = usePathname()
	const isLoggedLogin = pathname === '/login'
	const isLoggedRegister = pathname === '/register'
	// const isNotFound =
	// 	pathname !== '/' &&
	// 	pathname !== '/account' &&
	// 	pathname !== '/news' &&
	// 	pathname !== '/profile' &&
	// 	pathname !== '/register' &&
	// 	pathname !== '/rules' &&
	// 	pathname !== '/servers' &&
	// 	pathname !== '/donate' &&
	// 	pathname !== '/download' &&
	// 	pathname !== '/profile/general' &&
	// 	pathname !== '/profile/history' &&
	// 	pathname !== '/profile/pay' &&
	// 	pathname !== '/profile/possibilities' &&
	// 	pathname !== '/profile/privilege' &&
	// 	pathname !== '/profile/statistics' &&
	// 	pathname !== '/rules/communication' &&
	// 	pathname !== '/rules/construction' &&
	// 	pathname !== '/rules/gameproc' &&
	// 	pathname !== '/rules/general' &&
	// 	pathname !== '/rules/serverrul' &&
	// 	pathname !== '/servers/server-info'

	const isNotFound = pathname === '/not-found'
	const isRecoveryPage = pathname === '/reset-password'


	if (isLoggedLogin) return null
	if (isLoggedRegister) return null
	if (isNotFound) return null
	if (isRecoveryPage) return null

  return (
		<footer className='mt-10 lg:mt-16 border-t border-white/20 isolate z-[10] rounded-lg w-full md:mb-0 mb-20 bg-main-black'>
			<div className='px-5 xl:px-10 mx-auto max-w-[1440px] rounded-full py-8 lg:py-3'>
				<FooterNav />
			</div>
		</footer>
	)
}

export default Footer