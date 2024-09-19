import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

interface NavigationProps {
	onNext: () => void
	onPrev: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onNext, onPrev }) => {
	return (
		<div className='absolute inset-0 flex justify-between items-center px-5 sm:px-10'>
			<button
				onClick={onPrev}
				className='w-12 h-12 group border border-primary-pink bg-[#09090B] rounded-full text-white flex justify-center items-center'
			>
				<ArrowLeft className='group-hover:-translate-x-0.5 transition-all duration-300' />
			</button>
			<button
				onClick={onNext}
				className='w-12 h-12 group border border-primary-pink bg-[#09090B] rounded-full text-white flex justify-center items-center'
			>
				<ArrowRight className='group-hover:translate-x-0.5 transition-all duration-300' />
			</button>
		</div>
	)
}

export default Navigation
