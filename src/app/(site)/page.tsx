import Footer from '@/components/layout/Footer'
import Hero from '@/components/ui/hero/Hero'
import MainInfo from '@/components/ui/main-info/MainInfo'
import { SidebarDemo } from '@/components/ui/sidebar/Sidebar'

export default function HomePage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col gap-20 isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<Hero />
				<SidebarDemo />
				<MainInfo />
			</div>
		</main>
	)
}
