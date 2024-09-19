import { ReactNode } from 'react'
import RulesLinks from './components/RulesLinks'

export default function ProfileLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className={`bg-[#09090B] overflow-clip h-full`}>
			<RulesLinks />
			{children}
		</div>
	)
}
