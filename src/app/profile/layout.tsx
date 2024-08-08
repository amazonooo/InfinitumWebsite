import StarsCanvas from '@/components/ui/stars/Stars'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Inter } from 'next/font/google'

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
			className={`${inter.className} bg-[#161616] overflow-x-hidden w-full h-screen flex flex-col isolate`}
			style={{
				backdropFilter: 'blur(.5px)',
				transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
			}}
		>
			<StarsCanvas />
			{children}
		</div>
	)
}