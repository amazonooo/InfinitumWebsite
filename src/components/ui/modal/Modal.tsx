'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Modal({ isOpen, onClose }: {
	isOpen: boolean
	onClose: any
}) {
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

	if (!isOpen) return null

	const settingsRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (e: any) => {
		if(
			settingsRef.current &&
			!settingsRef.current.contains(e.target)
		) {
			onClose(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

  return (
		<LazyMotion features={domAnimation}>
			<div className='bg-[rgba(0,0,0,0.7)] w-full h-screen flex items-center justify-center fixed inset-0 z-[500] overflow-hidden'>
				<m.div
					ref={settingsRef}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.3 }}
					className='bg-main-black border border-white/[0.2] p-4 w-[340px] h-[270px] sm:w-[400px] sm:h-[300px] rounded-lg'
				>
					<div className='flex justify-between items-center'>
						<h1 className='Welcome-text text-2xl'>Infinitum</h1>
						<X
							className='cursor-pointer hover:text-primary-pink duration-300 transition-colors'
							onClick={onClose}
						/>
					</div>
				</m.div>
			</div>
		</LazyMotion>
	)
}