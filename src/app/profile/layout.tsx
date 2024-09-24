import ProfileLinks from './components/ProfileLinks'
import { ReactNode } from 'react'

export default function ProfileLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
  return (
		<div className={`bg-[#09090B] overflow-x-clip h-full`}>
			<ProfileLinks />
			{children}
		</div>
	)
}