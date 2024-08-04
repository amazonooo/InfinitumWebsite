'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { IoExitOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { cn } from '@/utils/cn'

interface ICard {
  image: string
  title: string
  desc: string
	link: string
	containerClassName?: string
}

const Card: FC<ICard> = ({ image, title, desc, link, containerClassName }) => {
  const [isHovered, setIsHovered] = useState(false)

	return (
		<motion.div initial='hidden' animate='visible'>
			<motion.div
				variants={slideInFromLeft(0.3)}
			>
				<Link
					href={link}
					className={cn(`flex group cursor-pointer flex-col h-auto w-[300px] sm:w-[450px] md:w-[350px] lg:w-[425px] xl:w-[550px] rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-purple-500/[0.2] ${
						isHovered ? '-translate-y-2' : 'translate-y-2'
					}`, containerClassName)}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className='flex items-center justify-center border-b border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
						<Image
							src={image}
							alt='card-image'
							className='h-[290px]'
							width={300}
							height={200}
						/>
					</div>
					<div className='flex items-end'>
						<div className='max-w-[80%] space-y-3 p-5 border-r border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
							<h1 className='text-2xl text-[#cbacf9]'>{title}</h1>
							<p className='text-sm md:text-base'>{desc}</p>
						</div>
						<div className='pb-5 pl-1 md:pl-2 flex items-center justify-center md:gap-x-2 gap-x-1 cursor-pointer '>
							<h3 className='group-hover:text-[#cbacf9] transition-all duration-450'>
								Читать
							</h3>
							<IoExitOutline className='-ml-3.5 opacity-0 group-hover:ml-0 group-hover:opacity-100 transition-all duration-450' />
						</div>
					</div>
				</Link>
			</motion.div>
		</motion.div>
	)
}

export default Card