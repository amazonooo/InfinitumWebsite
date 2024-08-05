'use client'

import { ICardData } from '@/components/ui/main-info/news/newsCard'
import { cn } from '@/utils/cn'
import { slideInFromLeft } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

interface ICardDetail {
	card: ICardData
}

const CardDetail: FC<ICardDetail> = ({ card }) => {
	return (
		<motion.div initial='hidden' animate='visible'>
			<motion.div variants={slideInFromLeft(0.3)}>
				<div
					className={cn(
						`flex group cursor-pointer flex-col h-auto w-[300px] sm:w-[450px] md:w-[350px] lg:w-[425px] xl:w-[550px] rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-purple-500/[0.2]`
					)}
					// onMouseEnter={() => setIsHovered(true)}
					// onMouseLeave={() => setIsHovered(false)}
				>
					<div className='flex items-center justify-center border-b border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
						<Image
							src={card.image}
							alt='card-image'
							className='h-[290px]'
							width={300}
							height={200}
						/>
					</div>
					<div className='flex items-end'>
						<div className='max-w-[80%] space-y-3 p-5 border-r border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
							<h1 className='text-2xl text-[#cbacf9]'>{card.title}</h1>
							<p className='text-sm md:text-base'>{card.desc}</p>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default CardDetail
