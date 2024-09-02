import Footer from '@/components/layout/Footer'
import Hero from '@/components/ui/hero/Hero'
import MainInfo from '@/components/ui/main-info/MainInfo'
import { SidebarDemo } from '@/components/ui/sidebarTest/SidebarTest'
// import SidebarTest from '@/components/ui/sidebar/SidebarTest'
import { domAnimation, LazyMotion } from 'framer-motion'

export default function HomePage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<Hero />
				<MainInfo />
			</div>
		</main>
	)
}
