import { FC } from 'react'

const page: FC = () => {
  return (
		<section className='h-full w-full pt-16'>
			<div
				className='flex flex-col isolate z-[50] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
					page
				</div>
			</div>
		</section>
	)
}

export default page