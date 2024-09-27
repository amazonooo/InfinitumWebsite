'use client'

import { cn } from '@/lib/utils'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { LucideIcon, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Modal({ isOpen, onClose, children, header, className, icon }: {
	isOpen: boolean
	onClose: any
	children?: React.ReactNode
	header?: any
	className?: string
	icon?: any
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

	const modalRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (e: any) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose(false)
		}
	}

  return (
		<LazyMotion features={domAnimation}>
			<div
				onClick={handleClickOutside}
				className='bg-[rgba(0,0,0,0.7)] w-full h-screen flex items-center justify-center fixed inset-0 z-[500] overflow-hidden'
			>
				<m.div
					ref={modalRef}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.3 }}
					className='bg-main-black border border-white/[0.2] w-[340px] h-auto sm:w-[400px] rounded-lg'
				>
					<div className='flex justify-between items-center border-b border-b-white/[0.2] p-4'>
						<div className='flex items-center gap-x-2 md:gap-x-3'>
							<h1 className={cn('text-sm md:text-lg select-none', className)}>{header}</h1>
							{icon}
						</div>
						<X
							className='cursor-pointer hover:text-primary-pink duration-300 transition-colors'
							onClick={onClose}
						/>
					</div>
					{children}
				</m.div>
			</div>
		</LazyMotion>
	)
}