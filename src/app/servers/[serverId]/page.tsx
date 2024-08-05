'use client'

import { CardBody, CardContainer, CardItem } from '@/components/ui/main-info/news/3dCard'
import Image from 'next/image'
import Link from 'next/link'

const ServerDetail = ({params}: {
	params: {
		newsId: string
	}
}) => {
  return (
		<div className='h-screen w-full flex flex-col justify-center overflow-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				{params.newsId}
				<CardContainer>
					<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-teal-100/[0.3]'>
						<CardItem className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'>
							Server 1
						</CardItem>
						<CardItem
							as='p'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
							ab sint. Voluptates!
						</CardItem>
						<CardItem className='w-full mt-4'>
							<Image
								src='/news-1.png'
								height='1000'
								width='1000'
								className='h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full object-cover rounded-xl '
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-center items-center mt-20'>
							<CardItem
								as={Link}
								href='/'
								className='rounded-xl text-xs md:text-base bg-[#8153ff] py-2 px-4 font-normal dark:text-white'
							>
								Играть сейчас
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</div>
		</div>
	)
}

export default ServerDetail