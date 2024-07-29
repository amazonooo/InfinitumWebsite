import Footer from '@/components/layout/Footer'

export default function NewsPage() {
  return (
		<div className='h-full w-full'>
			<div
				className='isolate z-[50]'
				style={{
					backdropFilter: 'blur(1.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				News Page
			</div>
		</div>
	)
}