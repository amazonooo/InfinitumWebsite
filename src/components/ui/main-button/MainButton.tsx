import { InputHTMLAttributes } from 'react'
import { Loader } from '../loader/Loader'
import { cn } from '@/utils/cn'

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  className?: string
  text?: string
}

export function MainButton({ isLoading, children, className, text}: IButton) {
  return (
		<button
			className={cn(
				'cursor-pointer inline-flex justify-center whitespace-nowrap rounded-lg text-xl font-medium bg-gradient-to-r from-primary-pink to-primary-purple shadow focus:outline-none focus-visible:outline-none relative hover:scale-105 transition-all duration-300',
				className
			)}
		>
			{text}
			{isLoading ? <Loader /> : children}
		</button>
	)
}