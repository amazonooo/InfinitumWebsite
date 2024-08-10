'use client'

import { FC, useState } from 'react'

interface IAccordion {
	id?: string
	name: string
	text1: string
	text2: string
	text3: string
} 

const Accordion: FC<IAccordion> = ({ id, name, text1, text2, text3 }) => {
	const [accordionOpen, setAccordionOpen] = useState(false)

	return (
		<>
			<div className='border border-white/50 p-2 rounded-lg'>
				<button
					onClick={() => setAccordionOpen(!accordionOpen)}
					className='flex justify-between items-center w-full'
				>
					<div className='flex items-center gap-x-4'>
						<div className='border border-[#cbacf9] p-2 w-12 h-12 flex items-center justify-center rounded-xl'>
							{id}
						</div>
						<span className='text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap'>
							{name}
						</span>
					</div>
					{/* {accordionOpen ? (
					<span>
						<ArrowDown size={20} />
					</span>
				) : (
					<span>
						<Minus size={20} />
					</span>
				)} */}
					<svg
						className='fill-white shrink-0 ml-8'
						width='16'
						height='16'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							y='7'
							width='16'
							height='2'
							rx='1'
							className={`transform origin-center transition duration-300 ease-out ${
								accordionOpen && '!rotate-180'
							}`}
						/>
						<rect
							y='7'
							width='16'
							height='2'
							rx='1'
							className={`transform origin-center rotate-90 transition duration-300 ease-out ${
								accordionOpen && '!rotate-180'
							}`}
						/>
					</svg>
				</button>
				<div
					className={`mt-4 ml-2 transition-all duration-300 text-sm overflow-hidden ${
						accordionOpen ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'
					}`}
					style={{ maxHeight: accordionOpen ? '1000px' : '0px' }}
				>
					<p className='text-sm sm:text-base md:text-lg overflow-hidden'>
						{text1}
					</p>
					<br />
					<p className='text-sm sm:text-base md:text-lg overflow-hidden'>
						{text2}
					</p>
					<br />
					<p className='text-sm sm:text-base md:text-lg overflow-hidden'>
						{text3}
					</p>
				</div>
			</div>
		</>
	)
}

export default Accordion