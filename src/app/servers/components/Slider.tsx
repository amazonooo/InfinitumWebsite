import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide from './Slide'
import Navigation from './Navigation'

const Slider: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			title: 'Новый 1',
			description:
				'Присоединяйтесь к сообществу геймеров, которые уже оценили наш лаунчер.',
			buttonText: 'Читать',
		},
		{
			title: 'Новый 2',
			description:
				'Присоединяйтесь к сообществу геймеров, которые уже оценили наш лаунчер.',
			buttonText: 'Читать',
		},
		{
			title: 'Новый 3',
			description:
				'Присоединяйтесь к сообществу геймеров, которые уже оценили наш лаунчер.',
			buttonText: 'Читать',
		},
	]

	const nextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide(
			prevSlide => (prevSlide - 1 + slides.length) % slides.length
		)
	}

	const slideVariants = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
	}

	return (
		<div className='relative flex items-center justify-center w-full'>
			<AnimatePresence>
				<motion.div
					key={currentSlide}
					initial='initial'
					animate='animate'
					exit='exit'
					variants={slideVariants}
					transition={{ type: 'spring', stiffness: 200, damping: 21 }}
					className='absolute'
				>
					<Slide slide={slides[currentSlide]} />
				</motion.div>
			</AnimatePresence>
			<Navigation onNext={nextSlide} onPrev={prevSlide} />
		</div>
	)
}

export default Slider
