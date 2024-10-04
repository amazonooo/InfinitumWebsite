'use client'

import { slideInFromLeft } from '@/utils/motion'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { donateData } from './card/donateData'
import DonateCard from './card/DonateCard'

export default function DonateMain() {
  return (
		<LazyMotion features={domAnimation}>
			<m.section initial='hidden' animate='visible'>
				<m.div variants={slideInFromLeft(0.3)} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 mt-20 mb-10'>
          {donateData.map((card) => (
            <DonateCard key={card.id} id={card.id} title={card.title} Icon={card.Icon} count={card.count} border={card.border} />
          ))}
        </m.div>  
			</m.section>
		</LazyMotion>
	)
}