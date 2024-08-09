import StarsCanvas from '@/components/ui/stars/Stars'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Inter } from 'next/font/google'
import ProfileLinks from './components/ProfileLinks'
import ProfileTop from './components/ProfileTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile',
  NO_INDEX_PAGE
}

export default function ProfileLayout({
	children,
	type
}: Readonly<{
	children: React.ReactNode
	type: string
}>) {
  return (
		<div
			className={`${inter.className} bg-[#161616] overflow-x-hidden h-screen flex flex-col items-center`}
		>
			<ProfileLinks />
			{children}
		</div>
	)
}