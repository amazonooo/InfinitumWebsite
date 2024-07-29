'use client'

import Footer from '@/components/layout/Footer'
import Hero from '@/components/ui/hero/Hero'
import NewsHero from './components/NewsHero'
import News from '@/components/ui/main-info/news/News'

export default function NewsPage() {
  return (
		<div className='h-full w-full px-5 sm:px-10 flex flex-col'>
			<div
				className='flex flex-col gap-28 isolate z-[50]'
				style={{
					backdropFilter: 'blur(3px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				{/* <Hero /> */}
				<NewsHero />
				<News />
				<Footer />
			</div>
		</div>
	)
}