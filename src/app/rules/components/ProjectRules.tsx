'use client'

import { slideInFromLeft } from '@/utils/motion'
import { FC } from 'react'
import { motion } from 'framer-motion'
import Accordion from '@/components/ui/accordion/Accordion'
import { accordionItem } from '@/components/ui/accordion/accordionItem'

const ProjectRules: FC = () => {
  return (
		<motion.section initial='hidden' animate='visible'>
			<motion.div
				variants={slideInFromLeft(0.3)}
				className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'
			>
				<div className='p-6'>
					<h1 className='text-4xl mb-7'>
						Правила{' '}
						<span className='underline decoration-2 underline-offset-4 decoration-[#cbacf9]'>
							проекта
						</span>
					</h1>
					{/* <div className='p-4 rounded-lg border border-[#cbacf9]/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'> */}
						<div className='flex flex-col gap-y-6 justify-between'>
							{accordionItem.map((acc) => (
								<Accordion
									key={acc.id}
									id={acc.id}
									name={acc.name}
									text1={acc.text1}
									text2={acc.text2}
									text3={acc.text3}
								/>
							))}
						</div>
					{/* </div> */}
				</div>
			</motion.div>
		</motion.section>
	)
}

export default ProjectRules