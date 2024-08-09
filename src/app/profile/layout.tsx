import ProfileLinks from './components/ProfileLinks'
import { ReactNode } from 'react'

export default function ProfileLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
  return (
		<div
			className={`bg-[#161616] overflow-x-hidden h-full`}
		>
			<ProfileLinks />
			{children}
		</div>
	)
}